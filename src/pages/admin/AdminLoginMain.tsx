import AdminLogin from '../../components/admin/AdminLogin';
import FooterOne from '../../layouts/footers/FooterOne';

const AdminLoginMain = () => {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <AdminLogin />
          </main>
          <FooterOne style={false} />
        </div>
      </div>
    </>
  );
};

export default AdminLoginMain;


