import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header>
      <h1>Gestión de Servicios de TI</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/importancia">
              Importancia de la Gestión de Servicios
            </Link>
          </li>
          <li>
            <Link to="/enfoques">Enfoques Metodológicos</Link>
          </li>
          <li>
            <Link to="/conceptos">Conceptos Clave</Link>
          </li>
          <li>
            <Link to="/itil">Modelo ITIL</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/importancia" element={<Importance />} />
        <Route path="/enfoques" element={<MethodologicalApproaches />} />
        <Route path="/conceptos" element={<KeyConcepts />} />
        <Route path="/itil" element={<ITILModel />} />
      </Routes>
    </main>
  );
}

function Home() {
  return (
    <>
      <h2>Definición</h2>
      <p>
        La Gestión de Servicios de TI (Tecnologías de la Información) es un
        enfoque que se centra en diseñar, implementar, gestionar y mejorar los
        servicios de tecnología para satisfacer las necesidades de los usuarios
        y las organizaciones. Esto incluye todo lo relacionado con la
        infraestructura, aplicaciones y soporte técnico.
      </p>
      <p>Los principales objetivos de la gestión de servicios de TI son:</p>
      <ol>
        <li>
          Proporcionar valor: Asegurarse de que los servicios de TI aporten un
          valor real al negocio.
        </li>
        <li>
          Mejorar la satisfacción del usuario: Garantizar que los servicios sean
          accesibles y cumplan con las expectativas de los usuarios.
        </li>
        <li>
          Optimizar procesos: Establecer procesos claros y eficientes para la
          entrega y gestión de servicios.
        </li>
        <li>
          Mitigar riesgos: Identificar y gestionar riesgos relacionados con la
          tecnología y la operación de servicios.
        </li>
      </ol>
      <p>
        El marco ITIL (Information Technology Infrastructure Library) es uno de
        los más reconocidos en este ámbito, proporcionando directrices y buenas
        prácticas para la gestión de servicios de TI.
      </p>
    </>
  );
}

function Importance() {
  return (
    <Section
      title="Importancia de la Gestión de Servicios de TI"
      summary="La gestión de servicios de TI es fundamental para las organizaciones modernas, ya que permite la alineación de los servicios de tecnología con los objetivos y necesidades del negocio. En un contexto donde la tecnología es el pilar de la mayoría de los procesos empresariales, la gestión de servicios de TI asegura que las organizaciones puedan ofrecer servicios confiables, eficientes y de alta calidad, maximizando la satisfacción del cliente y mejorando la competitividad. A través de un conjunto de normas, metodologías y mejores prácticas, la gestión de servicios de TI permite que las organizaciones optimicen la entrega y operación de sus servicios de TI, asegurando la calidad y disponibilidad de los servicios y fomentando una cultura de mejora continua."
      attributes={[
        'Alineación estratégica: Garantiza que los servicios de TI respalden los objetivos de negocio.',
        'Eficiencia operativa: Optimiza procesos para reducir interrupciones y mejorar el uso de recursos de TI.',
        'Satisfacción del cliente: Asegura una experiencia de usuario consistente.',
        'Calidad y disponibilidad: Mantiene los servicios de TI activos y funcionando como se espera.',
        'Mejora continua: Fomenta un proceso de revisión y optimización constante.',
      ]}
    />
  );
}

function MethodologicalApproaches() {
  return (
    <Section
      title="Enfoques Metodológicos para la Gestión de Servicios"
      summary="Los enfoques metodológicos para la gestión de servicios de TI incluyen normas, estándares y mejores prácticas que guían a las organizaciones en la implementación y gestión efectiva de sus servicios. Estos enfoques ayudan a establecer un marco sólido para garantizar un nivel adecuado de calidad y eficiencia."
      attributes={[
        'Estandarización: Proporciona un marco claro y un conjunto de prácticas para la gestión de servicios.',
        'Mejores prácticas: Incluye lecciones aprendidas y enfoques efectivos.',
        'Alineación con el negocio: Facilita la sintonía con los objetivos estratégicos.',
        'Control de riesgos: Permite identificar y mitigar riesgos asociados.',
        'Mejora continua: Fomenta la innovación y la adaptación constante.',
      ]}
    />
  );
}

function KeyConcepts() {
  return (
    <Section
      title="Conceptos Clave de la Gestión de Servicios"
      summary="La gestión de servicios de TI abarca varios conceptos clave, incluyendo servicio, valor, proceso, incidente y cambio. Estos conceptos son fundamentales para el éxito de cualquier estrategia de gestión."
      attributes={[
        'Servicio: Proporciona valor a los clientes.',
        'Valor: Percepción del beneficio recibido por el cliente.',
        'Proceso: Conjunto de actividades estructuradas.',
        'Incidente: Interrupción que requiere gestión.',
        'Cambio: Modificación que debe ser controlada.',
      ]}
    />
  );
}

function ITILModel() {
  return (
    <div>
      <Section
        title="Modelo ITIL"
        summary="ITIL es un marco de referencia para la gestión de servicios de TI que proporciona un enfoque sistemático y estructurado para el diseño, la entrega y la mejora de servicios. Su ciclo de vida incluye estrategia, diseño, transición, operación y mejora continua."
        attributes={[
          'Estrategia del Servicio: Define la visión y objetivos.',
          'Diseño del Servicio: Se centra en diseñar nuevos servicios.',
          'Transición del Servicio: Planificación de la transición.',
          'Operación del Servicio: Entrega y soporte de servicios.',
          'Mejora Continua del Servicio: Optimización constante.',
        ]}
      />

      <h2>Línea de Tiempo del Modelo ITIL</h2>
      <table>
        <thead>
          <tr>
            <th>Año</th>
            <th>Versión</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1980s</td>
            <td>ITIL v1</td>
            <td>
              Desarrollado en el Reino Unido, ITIL v1 consistía en más de 30
              libros sobre gestión de TI.
            </td>
          </tr>
          <tr>
            <td>2000</td>
            <td>ITIL v2</td>
            <td>
              Simplificación de ITIL a 7 libros, con énfasis en las prácticas de
              soporte y entrega de servicios.
            </td>
          </tr>
          <tr>
            <td>2007</td>
            <td>ITIL v3 (ITIL 2007)</td>
            <td>
              Introducción del ciclo de vida del servicio en cinco etapas,
              orientado a la creación de valor.
            </td>
          </tr>
          <tr>
            <td>2011</td>
            <td>ITIL 2011 Edition</td>
            <td>
              Revisión de ITIL v3, con mayor claridad en roles y procesos.
            </td>
          </tr>
          <tr>
            <td>2019</td>
            <td>ITIL 4</td>
            <td>
              Actualización con un enfoque en agilidad, DevOps y el marco de las
              4 dimensiones, adaptándose a la era digital.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Section({ title, summary, attributes }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <p>{summary}</p>
      <OrganizationalGraphic attributes={attributes} />
    </div>
  );
}

function OrganizationalGraphic({ attributes, isTimeline }) {
  return (
    <div className={'graphic wheel'}>
      {isTimeline ? (
        <ul>
          {attributes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <div className="wheel">
          {attributes.map((item, index) => (
            <div key={index} className="wheel-item">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Producto Académico 01 - Tommy Bryan López Sánchez</p>
    </footer>
  );
}

export default App;
