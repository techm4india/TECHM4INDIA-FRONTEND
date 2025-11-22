import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

const LaunchPage = lazy(() => import('./pages/LaunchPage'))
const LaunchCountdown = lazy(() => import('./pages/LaunchCountdown'))
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const WhyTechM4India = lazy(() => import('./pages/WhyTechM4India'))
const Divisions = lazy(() => import('./pages/Divisions'))
const TechM4SchoolsAbout = lazy(() => import('./pages/divisions/TechM4SchoolsAbout'))
const TechM4SchoolsPrograms = lazy(() => import('./pages/divisions/TechM4SchoolsPrograms'))
const TechM4SchoolsBenefits = lazy(() => import('./pages/divisions/TechM4SchoolsBenefits'))
const TechM4EngineeringAbout = lazy(() => import('./pages/divisions/TechM4EngineeringAbout'))
const TechM4EngineeringPrograms = lazy(() => import('./pages/divisions/TechM4EngineeringPrograms'))
const TechM4EngineeringBenefits = lazy(() => import('./pages/divisions/TechM4EngineeringBenefits'))
const TechM4SolutionsAbout = lazy(() => import('./pages/divisions/TechM4SolutionsAbout'))
const TechM4SolutionsOfferings = lazy(() => import('./pages/divisions/TechM4SolutionsOfferings'))
const TechM4SolutionsBenefits = lazy(() => import('./pages/divisions/TechM4SolutionsBenefits'))
const TechM4SpaceAbout = lazy(() => import('./pages/divisions/TechM4SpaceAbout'))
const TechM4SpacePrograms = lazy(() => import('./pages/divisions/TechM4SpacePrograms'))
const TechM4SpaceBenefits = lazy(() => import('./pages/divisions/TechM4SpaceBenefits'))
const ProgramsServices = lazy(() => import('./pages/ProgramsServices'))
const Clients = lazy(() => import('./pages/Clients'))
const ServicesSchools = lazy(() => import('./pages/services/ServicesSchools'))
const ServicesColleges = lazy(() => import('./pages/services/ServicesColleges'))
const ServicesEnterprises = lazy(() => import('./pages/services/ServicesEnterprises'))
const ResearchInnovation = lazy(() => import('./pages/ResearchInnovation'))
const GlobalPartnerships = lazy(() => import('./pages/GlobalPartnerships'))
const TechStackFrontend = lazy(() => import('./pages/techstack/TechStackFrontend'))
const TechStackBackend = lazy(() => import('./pages/techstack/TechStackBackend'))
const TechStackAI = lazy(() => import('./pages/techstack/TechStackAI'))
const CloudDeployment = lazy(() => import('./pages/techstack/CloudDeployment'))
const DevOpsSecurity = lazy(() => import('./pages/techstack/DevOpsSecurity'))
const Roadmap = lazy(() => import('./pages/Roadmap'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const ScrollStackDemo = lazy(() => import('./pages/ScrollStackDemo'))
const MagicBentoDemo = lazy(() => import('./pages/MagicBentoDemo'))
const ChromaGridDemo = lazy(() => import('./pages/ChromaGridDemo'))
const LiquidChromeDemo = lazy(() => import('./pages/LiquidChromeDemo'))

const Fallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center text-primary-600 font-semibold">
    Loading experience...
  </div>
)

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/" element={<LaunchPage />} />
              <Route path="/launch" element={<LaunchCountdown />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/why-techm4india" element={<WhyTechM4India />} />
              <Route path="/divisions" element={<Divisions />} />
              
              {/* TechM4Schools Routes */}
              <Route path="/divisions/schools" element={<TechM4SchoolsAbout />} />
              <Route path="/divisions/schools/programs" element={<TechM4SchoolsPrograms />} />
              <Route path="/divisions/schools/benefits" element={<TechM4SchoolsBenefits />} />
              
              {/* TechM4Engineering Routes */}
              <Route path="/divisions/engineering" element={<TechM4EngineeringAbout />} />
              <Route path="/divisions/engineering/programs" element={<TechM4EngineeringPrograms />} />
              <Route path="/divisions/engineering/benefits" element={<TechM4EngineeringBenefits />} />
              
              {/* TechM4Solutions Routes */}
              <Route path="/divisions/solutions" element={<TechM4SolutionsAbout />} />
              <Route path="/divisions/solutions/offerings" element={<TechM4SolutionsOfferings />} />
              <Route path="/divisions/solutions/benefits" element={<TechM4SolutionsBenefits />} />
              
              {/* TechM4Space Routes */}
              <Route path="/divisions/space" element={<TechM4SpaceAbout />} />
              <Route path="/divisions/space/programs" element={<TechM4SpacePrograms />} />
              <Route path="/divisions/space/benefits" element={<TechM4SpaceBenefits />} />
              
              {/* Programs & Services */}
              <Route path="/programs-services" element={<ProgramsServices />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/services/schools" element={<ServicesSchools />} />
              <Route path="/services/colleges" element={<ServicesColleges />} />
              <Route path="/services/enterprises" element={<ServicesEnterprises />} />
              
              {/* Other Pages */}
              <Route path="/research-innovation" element={<ResearchInnovation />} />
              <Route path="/global-partnerships" element={<GlobalPartnerships />} />
              
              {/* Tech Stack */}
              <Route path="/tech-stack/frontend" element={<TechStackFrontend />} />
              <Route path="/tech-stack/backend" element={<TechStackBackend />} />
              <Route path="/tech-stack/ai-ml" element={<TechStackAI />} />
              <Route path="/tech-stack/cloud" element={<CloudDeployment />} />
              <Route path="/tech-stack/devops" element={<DevOpsSecurity />} />
              
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/scroll-stack-demo" element={<ScrollStackDemo />} />
              <Route path="/magic-bento-demo" element={<MagicBentoDemo />} />
              <Route path="/chroma-grid-demo" element={<ChromaGridDemo />} />
              <Route path="/liquid-chrome-demo" element={<LiquidChromeDemo />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </AuthProvider>
  )
}

export default App

