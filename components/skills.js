import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SkillsTable from "./skills/SkillsTable";
import { skillsData } from "./skills/skillsData";

const Skills = () => {
  return (
    <Tabs variant="soft-rounded" colorScheme="teal" mt={5}>
      <TabList>
        <Tab>WEB</Tab>
        <Tab>DEVOPS</Tab>
        <Tab>VIDEO</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <SkillsTable skills={skillsData.webDev} />
        </TabPanel>
        <TabPanel>
          <SkillsTable skills={skillsData.devops} />
        </TabPanel>
        <TabPanel>
          <SkillsTable skills={skillsData.video} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Skills;
