import { Box, DataTable, Meter, Tab, Tabs, Text } from 'grommet';
import Layout from '../components/Layout';

export default function TabsPage({}) {
  return (
    <Layout>
      <Tabs>
        <Tab title="By Uniforms">
          <Box pad="medium">
            Page for listing and operating from a list of uniform items.
          </Box>
          <Box>
            <DataTable
              columns={[
                {
                  property: 'name',
                  header: <Text>Name</Text>,
                  primary: true
                },
                {
                  property: 'percent',
                  header: 'Complete',
                  render: (datum) => (
                    <Box pad={{ vertical: 'xsmall' }}>
                      <Meter
                        values={[{ value: datum.percent }]}
                        thickness="small"
                        size="small"
                      />
                    </Box>
                  )
                }
              ]}
              data={[
                { name: 'Alan', percent: 20 },
                { name: 'Bryan', percent: 30 },
                { name: 'Chris', percent: 40 },
                { name: 'Eric', percent: 80 }
              ]}
            />
          </Box>
        </Tab>
        <Tab title="By Students">
          <Box pad="medium">
            Page for listing and operating from a list of students.
          </Box>
        </Tab>
      </Tabs>
    </Layout>
  );
}
