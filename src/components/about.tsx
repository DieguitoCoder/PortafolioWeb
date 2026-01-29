"use client";

import { useState, useEffect, useRef } from "react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="acerca"
      className={`min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda - Imagen */}
        <div className="flex justify-center lg:justify-start animate-fade-up">
          <div className="w-96 h-[32rem] lg:w-[30rem] lg:h-[40rem] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/me2.jpg"
              alt="Luis Cortés"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Columna derecha - Información */}
        <div className="space-y-8">
          <div className="transform transition-all duration-700 ease-out hover:scale-105" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.3s forwards' : 'none',
                 opacity: 0 
               }}>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Acerca de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 animate-pulse">
                Mí
              </span>
            </h2>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.4s forwards' : 'none',
                 opacity: 0 
               }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Diego Teran
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mi enfoque no es solo escribir código, sino entender el comportamiento de los datos para crear sistemas que aprendan y evolucionen. Soy un aprendiz constante que explora activamente las fronteras de la IA Generativa y la automatización para optimizar procesos de desarrollo.  
            </p>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.5s forwards' : 'none',
                 opacity: 0 
                }}>
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 rounded-full animate-pulse" /> Educación
            </h4>
            <div className="space-y-2 text-gray-600">
              <p className="hover:text-gray-900 transition-colors">
                <span className="font-semibold">
                  RIWI – Junior Developer / Data Analytics
                </span>{" "}
                <span className="text-sm">(Entrenamiento Avanzado)</span>
              </p>
              <p className="text-sm hover:text-gray-900 transition-colors">Ago 2025 – Dic 2025</p>
              <p className="text-sm hover:text-gray-900 transition-colors">
                Formé parte de la ruta avanzada de Data Analytics, especializándome en el procesamiento de datos con Python y la creación de tableros de control estratégicos en Power BI.
              </p>
              <p className="text-sm hover:text-gray-900 transition-colors">
                Desarrollé habilidades técnicas intensivas en el ecosistema de RIWI, destacando por la capacidad analítica y resolución de problemas técnicos complejos.
              </p>
            </div>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.6s forwards' : 'none',
                 opacity: 0 
               }}>
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 rounded-full animate-pulse" /> Experiencia
            </h4>
            <div className="space-y-2 text-gray-600">
              <p className="hover:text-gray-900 transition-colors">
                <span className="font-semibold">
                  <a href="https://riwi.io/" className="hover:underline">RIWI</a> – Backend Developer
                </span>{" "}
                <span className="text-sm">(Actual)</span>
              </p>
              <p className="text-sm hover:text-gray-900 transition-colors">Ene 2026 – Presente</p>
              <p className="text-sm hover:text-gray-900 transition-colors mt-2">
                • Lidero el desarrollo de soluciones integrales con un enfoque especializado en arquitectura Backend y optimización de Bases de Datos utilizando Python.
              </p>
              <p className="text-sm hover:text-gray-900 transition-colors">
                • Diseño e implemento servicios escalables y eficientes, asegurando la integridad de los datos y el rendimiento del sistema.
              </p>
              <p className="text-sm hover:text-gray-900 transition-colors">
                • Colaboro en el ciclo completo de desarrollo (Backend), garantizando una transición fluida entre la lógica del servidor y la interfaz de usuario.
              </p>
            </div>
          </div>
        
          <div className="transform transition-all duration-700 ease-out" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.7s forwards' : 'none',
                 opacity: 0 
               }}>
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 rounded-full animate-pulse" /> Habilidades Técnicas
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-2">Full Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {["Python",  "API Rest", "FastAPI", "React", "TypeScript"].map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white hover:scale-110 transition-all duration-300 transform hover:rotate-1"
                      style={{
                        animation: isVisible ? `fadeUp 0.5s ease-out ${0.8 + index * 0.05}s forwards` : 'none',
                        opacity: 0
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-2">Data Analytics:</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Pandas", "Power BI", "PostgreSQL"].map((skill, index) => (
                    <span
                      key={`analytics-${skill}`}
                      className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white hover:scale-110 transition-all duration-300 transform hover:rotate-1"
                      style={{
                        animation: isVisible ? `fadeUp 0.5s ease-out ${0.9 + index * 0.05}s forwards` : 'none',
                        opacity: 0
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

