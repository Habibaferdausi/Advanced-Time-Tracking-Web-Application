'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Dashboard() {

  const { user } = useAuth();
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from Firebase
    if (user) {
      const projectsRef = firebase.database().ref(`projects/${user.uid}`);
      projectsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setProjects(Object.values(data));
        }
      });
    }
  }, [user]);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    router.push('/login');
  };
  return (
 
  <div>
  <header>
        <h1>Time Tracking App</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <main>
        <section>
          <h2>Welcome, {user ? user.displayName : 'Guest'}!</h2>
          <p>Total Hours Worked: {calculateTotalHours(projects)}</p>
        </section>

        <section>
          <h2>Your Projects</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <h3>{project.name}</h3>
                {/* Display project tasks and time tracking details */}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

const calculateTotalHours = (projects) => {
  // Implement logic to calculate total hours
  return 0;
};

