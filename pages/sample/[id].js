import Layout from '../../components/Layout';
import { gql, hasuraAdminClient } from '../../lib/hasura-admin-client';
const GetSampleIds = gql`
  {
    sample {
      id
    }
  }
`;

const GetSampleById = gql`
  query GetSampleById($id: Int!) {
    sample_by_pk(id: $id) {
      id
      name
    }
  }
`;

export const getStaticPaths = async () => {
  //const hasura = hasuraAdminClient();

  const { sample } = await hasuraAdminClient.request(GetSampleIds);

  return {
    paths: sample.map(({ id }) => ({
      params: {
        id: id.toString()
      }
    })),
    fallback: true
  };
};

export const getStaticProps = async ({ params }) => {
  // const hasura = hasuraAdminClient();
  const { id } = params;
  console.log(id);
  const initialData = await hasuraAdminClient.request(GetSampleById, {
    id
  });

  return {
    props: {
      initialData
    },
    revalidate: 1
  };
};

export default function SamplePage({ initialData }) {
  const {
    sample_by_pk: { name }
  } = initialData;
  return (
    <Layout>
      <h2>{name}</h2>
    </Layout>
  );
}
