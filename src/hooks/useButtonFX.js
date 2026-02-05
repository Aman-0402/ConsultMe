import { useEffect, useRef } from 'react'

/* ============================================================
   ParticleBurst — lightweight canvas particle engine
============================================================ */
class ParticleBurst {
  constructor(canvas, color) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.color = color
    this.particles = []
    this.animId = null
    this.resize()
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect()
    this.canvas.width = rect.width
    this.canvas.height = rect.height
  }

  burst(x, y) {
    for (let i = 0; i < 14; i++) {
      const angle = (Math.PI * 2 / 14) * i + (Math.random() - 0.5) * 0.6
      const speed = 1.2 + Math.random() * 2.2
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: 0.018 + Math.random() * 0.015,
        size: 2 + Math.random() * 2.5,
      })
    }
    if (!this.animId) this.loop()
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.particles = this.particles.filter(p => p.life > 0)

    this.particles.forEach(p => {
      p.x += p.vx
      p.y += p.vy
      p.life -= p.decay
      p.vx *= 0.97
      p.vy *= 0.97

      this.ctx.globalAlpha = p.life
      this.ctx.fillStyle = this.color
      this.ctx.beginPath()
      this.ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2)
      this.ctx.fill()
    })

    this.ctx.globalAlpha = 1

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this.loop())
    } else {
      this.animId = null
    }
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId)
  }
}

/* ============================================================
   useButtonFX(btnRef, canvasRef, variant)
   — magnetic pull on mousemove
   — ripple on click
   — particle trail on mousemove
============================================================ */
export default function useButtonFX(btnRef, canvasRef, variant) {
  const particleRef = useRef(null)

  useEffect(() => {
    const btn = btnRef.current
    const canvas = canvasRef.current
    if (!btn || !canvas) return

    // ── hard reset on mount (fixes stale state after navigation) ──
    btn.style.transition = ''
    btn.style.transform = 'translate(0, 0)'

    // ── particle color based on variant ──
    const color = variant === 'primary' ? '#a78bfa' : '#22d3ee'
    const pb = new ParticleBurst(canvas, color)
    particleRef.current = pb

    // sync canvas pixel size to its CSS box right away
    pb.resize()

    // resize canvas if window resizes
    const onResize = () => pb.resize()
    window.addEventListener('resize', onResize)

    // ── 1) MAGNETIC ──
    const onMouseMove = (e) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`

      // ── 3) PARTICLES ──
      const canvasRect = canvas.getBoundingClientRect()
      pb.burst(e.clientX - canvasRect.left, e.clientY - canvasRect.top)
    }

    const onMouseLeave = () => {
      btn.style.transition = 'transform 0.5s cubic-bezier(.22,1,.36,1)'
      btn.style.transform = 'translate(0, 0)'
      setTimeout(() => (btn.style.transition = ''), 500)
    }

    // ── 2) RIPPLE ──
    const onClick = (e) => {
      const ripple = document.createElement('span')
      ripple.classList.add('ripple')

      const rect = btn.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)

      ripple.style.width = ripple.style.height = size + 'px'
      ripple.style.left = e.clientX - rect.left - size / 2 + 'px'
      ripple.style.top = e.clientY - rect.top - size / 2 + 'px'

      btn.appendChild(ripple)
      ripple.addEventListener('animationend', () => ripple.remove())
    }

    btn.addEventListener('mousemove', onMouseMove)
    btn.addEventListener('mouseleave', onMouseLeave)
    btn.addEventListener('click', onClick)

    // ── cleanup ──
    return () => {
      btn.removeEventListener('mousemove', onMouseMove)
      btn.removeEventListener('mouseleave', onMouseLeave)
      btn.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
      pb.destroy()

      // wipe any leftover inline styles so re-mount starts clean
      btn.style.transform = ''
      btn.style.transition = ''
    }
  }, [btnRef, canvasRef, variant])
}