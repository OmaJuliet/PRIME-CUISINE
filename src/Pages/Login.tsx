import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useNavigate } from 'react-router-dom';
import login from '../img/login.png';

const supabase = createClient(
  'https://amlztwycpfhonwfvzhca.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtbHp0d3ljcGZob253ZnZ6aGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0ODI1NTksImV4cCI6MTk5MDA1ODU1OX0.NqV1vbExN3jpY11rTWPN4fEvEw-m5xjNmHVh2GwGIsI'
);

function Login() {
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange(async (event) => {
    if (event === 'SIGNED_IN') {
      navigate('/home');
    } else {
      navigate('/');
    }
  });

  return (
    <>
      <div className="container mx-auto flex justify-center py-8 text-white">
        <div className="flex-1 h-full max-w-full md:ml-20 md:mr-16 mt-4 bg-bgColor">
          <div className="flex flex-col md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img className="object-cover w-full h-full" src={login}
                alt="login" />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-72">
                <h1 className="mb-4 text-2xl font-bold text-center text-white">
                  Signup/Login to Your Account
                </h1>
                <Auth
                  supabaseClient={supabase}
                  appearance={{ theme: ThemeSupa }}
                  theme="light"
                  providers={["google"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

