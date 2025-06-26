import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";

const MotionTr = motion(Tr);
const MotionTableContainer = motion(TableContainer);

const getLevelColor = (level) => {
  switch (level) {
    case "Experienced":
      return "green";
    case "Intermediate":
      return "blue";
    case "Basic":
      return "purple";
    default:
      return "gray";
  }
};

const SkillsTable = ({ skills }) => {
  const borderColor = useColorModeValue(
    "rgba(226, 232, 240, 0.8)",
    "rgba(45, 55, 72, 0.8)"
  );
  const hoverBg = useColorModeValue(
    "rgba(237, 242, 247, 0.2)",
    "rgba(45, 55, 72, 0.2)"
  );

  return (
    <AnimatePresence mode="wait">
      <MotionTableContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        borderRadius="xl"
        overflow="hidden"
        backdropFilter="blur(10px)"
        border="1px solid"
        borderColor={borderColor}
        boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)"
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th borderBottom="2px solid" borderColor={borderColor}></Th>
              <Th borderBottom="2px solid" borderColor={borderColor}>
                Skill
              </Th>
              <Th borderBottom="2px solid" borderColor={borderColor}>
                Level
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {skills.map((skill, index) => (
              <MotionTr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.01,
                  backgroundColor: hoverBg,
                  transition: { duration: 0.2 },
                }}
                cursor="pointer"
              >
                <Td>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircleIcon color="teal.500" boxSize={5} />
                  </motion.div>
                </Td>
                <Td fontWeight="medium">{skill.skill}</Td>
                <Td>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge
                      colorScheme={getLevelColor(skill.level)}
                      px={3}
                      py={1}
                      borderRadius="full"
                      textTransform="uppercase"
                      fontSize="xs"
                      fontWeight="bold"
                      opacity={0.9}
                      variant="outline"
                    >
                      {skill.level}
                    </Badge>
                  </motion.div>
                </Td>
              </MotionTr>
            ))}
          </Tbody>
        </Table>
      </MotionTableContainer>
    </AnimatePresence>
  );
};

export default SkillsTable;
