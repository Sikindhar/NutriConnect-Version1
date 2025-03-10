import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/AboutUs';
import Programs from './pages/NutritionPrograms';
import ContactForm from './pages/FormContactUs';
import BrowseNutritionList from './pages/BrowseNutritionists';
import UserProfile from './pages/Profile';
import SignInpage from './pages/SignIn';
import Faq from './pages/FAQs';
import SignUpPage from './pages/SignUpPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import GetStartedPage from './pages/GetStartedPage';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<SignInpage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/browseNutritionists"
              element={
                <ProtectedRoute>
                  <BrowseNutritionList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/getStarted"
              element={
                <ProtectedRoute>
                  <GetStartedPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contactUs"
              element={
                <ProtectedRoute>
                  <ContactForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/nutritionPrograms"
              element={
                <ProtectedRoute>
                  <Programs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/faqs"
              element={
                <ProtectedRoute>
                  <Faq />
                </ProtectedRoute>
              }
            />
            <Route
              path="/formContact"
              element={
                <ProtectedRoute>
                  <ContactForm />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </AuthProvider>
    </div>
  );
};

export default App;