import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Watch.css';

const Watch = () => {
  const navigate = useNavigate();

  // ✅ Redirect to Signin if not logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/signin');
    }
  }, [navigate]);

  // ✅ Get user info safely
  const userdata = JSON.parse(localStorage.getItem('userData') || '{}');
  const email = userdata?.email || '';
  const emailname = email ? email.split('@')[0] : 'User';

  const profiles = [
    {
      name: emailname,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
    },
    {
      name: 'Children',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5kKAEXgLj92-BGlVTvVNWBAdyernMYJ8xg&s',
    },
    {
      name: 'Add Profile',
      image:
        'https://www.vhv.rs/dpng/d/536-5367699_add-plus-new-user-green-page-file-up.png',
      isAdd: true,
    },
  ];

  const handleProfileClick = (profile) => {
    if (profile.isAdd) {
      alert('Feature coming soon!');
    } else {
      localStorage.setItem('activeProfile', profile.name);
      navigate('/homepage', { state: { profileName: profile.name } });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    localStorage.removeItem('activeProfile');
    navigate('/');
  };

  return (
    <div className='watchbody'>
      <h1>Who’s Watching?</h1>

      <div className='profiles-container'>
        {profiles.map((profile, index) => (
          <div
            key={index}
            className='profile-card'
            onClick={() => handleProfileClick(profile)}
          >
            <img
              src={profile.image}
              alt={profile.name}
              className='profile-img'
            />
            <p>{profile.name}</p>
          </div>
        ))}
      </div>

      <button className='manage-btn'>Manage Profiles</button>

      <div style={{ marginTop: '40px' }}>
        <button onClick={handleLogout} className='logout-btn'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Watch;
