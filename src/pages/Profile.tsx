import Breadcrumbs from '../components/Breadcrumbs';

const Profile = () => {
  const breadcrumbs = ['Профиль', 'Личные данные'];
  return (
    <div className="pt-4 pb-20">
      <div className="container mx-auto">
        <div className="mb-4">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
