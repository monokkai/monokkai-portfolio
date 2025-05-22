import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Skills = () => {
  return (
    <Tabs variant="soft-rounded" colorScheme="teal" mt={5}>
      <TabList>
        <Tab>WEB-DEV</Tab>
        <Tab>VIDEO</Tab>
        <Tab>DESIGN</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Skill</Th>
                  <Th>Level</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>HTML, CSS</Td>
                  <Td>Experienced</Td>
                </Tr>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>Java Script, Type Script</Td>
                  <Td>Experienced</Td>
                </Tr>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>C#(OOP, Windows Forms, WPF)</Td>
                  <Td>Experienced</Td>
                </Tr>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>React.JS, Next.JS</Td>
                  <Td>Intermediate</Td>
                </Tr>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>Docker</Td>
                  <Td>Intermediate</Td>
                </Tr>

                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>Chakra-UI</Td>
                  <Td>Intermediate</Td>
                </Tr>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>PostgreSQL</Td>
                  <Td>Intermediate</Td>
                </Tr>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>Tailwind CSS</Td>
                  <Td>Basic</Td>
                </Tr>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>Shadcn-UI</Td>
                  <Td>Basic</Td>
                </Tr>

                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>Node.JS, Express, Nest.JS</Td>
                  <Td>Basic</Td>
                </Tr>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>Framer-Motion</Td>
                  <Td>Basic</Td>
                </Tr>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>Git</Td>
                  <Td>Basic</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th></Th>
                  <Th>SKILL</Th>
                  <Th>LEVEL</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Skill</Th>
                  <Th>Level</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>Adobe Premiere Pro</Td>
                  <Td>Experienced</Td>
                </Tr>

                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>Final Cut Pro X</Td>
                  <Td>Intermediate</Td>
                </Tr>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>DaVinci Resolve</Td>
                  <Td>Intermediate</Td>
                </Tr>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>Adobe After Effects</Td>
                  <Td>Basic</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th></Th>
                  <Th>SKILL</Th>
                  <Th>LEVEL</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Skill</Th>
                  <Th>Level</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>Photoshop</Td>
                  <Td>Intermediate</Td>
                </Tr>
                <Tr>
                  <Td>
                    <CheckCircleIcon />
                  </Td>
                  <Td>Figma</Td>
                  <Td>Intermediate</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th></Th>
                  <Th>SKILL</Th>
                  <Th>LEVEL</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Skills;
