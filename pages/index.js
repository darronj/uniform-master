import { Text } from 'grommet';
import Layout from '../components/Layout';
import MainMenu from '../components/MainMenu';

const HomeSidebar = () => (
  <MainMenu>
    <Text>Added custom sidebar for page</Text>
  </MainMenu>
);

export default function Home({}) {
  return (
    <Layout sidebar={<HomeSidebar />}>
      <p>Home Page</p>
    </Layout>
  );
}
