import { getSelfByUsername } from "@/lib/auth-service";

interface CreatorPageProps {
 params: { username: string };
 children: React.ReactNode;
}

const CreatorPage = async ({ params, children }: CreatorPageProps) => {
 const self = await getSelfByUsername(params.username);
 return <h1>{`${self.username}'s Page`}</h1>;
};

export default CreatorPage;
