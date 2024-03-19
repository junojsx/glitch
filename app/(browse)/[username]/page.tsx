interface UserPageProps {
 params: {
  username: string;
 };
}

const UserPage = ({ params }: UserPageProps) => {
 return (
  <>
   <div className=""> User: {params.username}</div>
  </>
 );
};

export default UserPage;
