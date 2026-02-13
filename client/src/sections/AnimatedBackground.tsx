import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

interface NeuralNode {
  x: number;
  y: number;
  radius: number;
  connections: number[];
  pulse: number;
  active: boolean;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const nodesRef = useRef<NeuralNode[]>([]);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particleCount = 60;
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    const nodeCount = 12;
    nodesRef.current = [];
    for (let i = 0; i < nodeCount; i++) {
      nodesRef.current.push({
        x: (Math.random() * 0.6 + 0.2) * canvas.width,
        y: (Math.random() * 0.6 + 0.2) * canvas.height,
        radius: 3 + Math.random() * 3,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
        active: Math.random() > 0.5,
      });
    }

    nodesRef.current.forEach((node, i) => {
      const others = nodesRef.current
        .map((_, j) => ({ j, dist: Math.hypot(node.x - nodesRef.current[j].x, node.y - nodesRef.current[j].y) }))
        .filter(o => o.j !== i)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 3);
      node.connections = others.map(o => o.j);
    });

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;

      const bgGrad = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.4, 0,
        canvas.width * 0.5, canvas.height * 0.4, canvas.width * 0.8
      );
      bgGrad.addColorStop(0, 'rgba(90, 24, 154, 0.12)');
      bgGrad.addColorStop(0.3, 'rgba(123, 44, 191, 0.06)');
      bgGrad.addColorStop(0.6, 'rgba(157, 78, 221, 0.02)');
      bgGrad.addColorStop(1, 'rgba(244, 240, 250, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const orbs = [
        { x: canvas.width * 0.15, y: canvas.height * 0.25, radius: 220, offset: 0 },
        { x: canvas.width * 0.85, y: canvas.height * 0.45, radius: 280, offset: 2.1 },
        { x: canvas.width * 0.5, y: canvas.height * 0.75, radius: 200, offset: 4.2 },
        { x: canvas.width * 0.7, y: canvas.height * 0.15, radius: 160, offset: 1.5 },
      ];

      orbs.forEach((orb) => {
        const orbX = orb.x + Math.sin(time * 0.3 + orb.offset) * 60;
        const orbY = orb.y + Math.cos(time * 0.25 + orb.offset * 0.7) * 40;

        const orbGradient = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orb.radius);
        orbGradient.addColorStop(0, 'rgba(90, 24, 154, 0.2)');
        orbGradient.addColorStop(0.4, 'rgba(123, 44, 191, 0.08)');
        orbGradient.addColorStop(1, 'rgba(157, 78, 221, 0)');

        ctx.fillStyle = orbGradient;
        ctx.beginPath();
        ctx.arc(orbX, orbY, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      nodesRef.current.forEach((node, i) => {
        node.pulse += 0.02;
        const glow = 0.3 + Math.sin(node.pulse) * 0.2;

        node.connections.forEach(j => {
          const other = nodesRef.current[j];
          const signalPos = (Math.sin(time * 1.5 + i * 0.5) + 1) / 2;
          const midX = node.x + (other.x - node.x) * signalPos;
          const midY = node.y + (other.y - node.y) * signalPos;

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(90, 24, 154, ${0.08 + glow * 0.05})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(midX, midY, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(157, 78, 221, ${0.4 + glow * 0.3})`;
          ctx.fill();
        });

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + Math.sin(node.pulse) * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(90, 24, 154, ${glow * 0.5})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(90, 24, 154, ${glow * 0.08})`;
        ctx.fill();
      });

      particlesRef.current.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += particle.pulseSpeed;

        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 180 && distance > 0) {
          const force = (180 - distance) / 180;
          particle.vx += (dx / distance) * force * 0.015;
          particle.vy += (dy / distance) * force * 0.015;
        }

        particle.vx *= 0.998;
        particle.vy *= 0.998;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        const pulseFactor = 0.5 + Math.sin(particle.pulse) * 0.5;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * (0.8 + pulseFactor * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(90, 24, 154, ${particle.opacity * (0.3 + pulseFactor * 0.3)})`;
        ctx.fill();

        particlesRef.current.slice(i + 1).forEach((other) => {
          const dx2 = particle.x - other.x;
          const dy2 = particle.y - other.y;
          const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist < 130) {
            const alpha = 0.15 * (1 - dist / 130);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(123, 44, 191, ${alpha})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: 'transparent' }}
    />
  );
}
