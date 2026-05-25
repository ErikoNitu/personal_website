import { useState } from 'react'

const certificates = [
  {
    title: 'CCNA 1',
    image: '/certificates/ccna1.jpeg',
    description:
      'Introduction to Networks certification, focused on networking basics, IP addressing, Ethernet, and router/switch fundamentals.',
  },
  {
    title: 'CCNA 2',
    image: '/certificates/ccna2.jpeg',
    description:
      'Switching, routing, and wireless essentials certification, focused on VLANs, routing concepts, and wireless networking.',
  },
  {
    title: 'CCNA 3',
    image: '/certificates/ccna3.jpeg',
    description:
      'Enterprise networking, security, and automation certification, focused on advanced networking, security, and automation concepts.',
  },
  {
    title: 'SSS',
    image: '/certificates/sss.jpeg',
    description:
      'Cybersecurity and CTF-related certificate, focused on security fundamentals, problem solving, and technical challenges.',
  },
  {
    title: 'Python',
    image: '/certificates/python.jpeg',
    description:
      'Python programming certificate, focused on programming fundamentals, logic, and practical coding skills.',
  },
  {
    title: 'Quantum',
    image: '/certificates/quantum.jpeg',
    description:
      'Quantum computing certificate, focused on quantum basics, qubits, quantum logic, and emerging technologies.',
  },
]

function Certificates() {
  const duplicatedCertificates = [...certificates, ...certificates]
  const [activeCertificate, setActiveCertificate] = useState<string | null>(null)

  const handleCertificateClick = (title: string) => {
    setActiveCertificate((currentTitle) =>
      currentTitle === title ? null : title
    )
  }

  return (
    <section id="certificates" className="section certificates-section">
      <div className="projects-header">
        <p className="projects-title">Achievements</p>
        <h2>Certificates</h2>
      </div>

      <div className="certificates-carousel">
        <div className="certificates-track">
          {duplicatedCertificates.map((certificate, index) => {
            const isActive = activeCertificate === certificate.title

            return (
              <button
                type="button"
                className={`certificate-card ${isActive ? 'active' : ''}`}
                key={`${certificate.title}-${index}`}
                onClick={() => handleCertificateClick(certificate.title)}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                />

                <div className="certificate-popup">
                  <h3>{certificate.title}</h3>
                  <p>{certificate.description}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certificates