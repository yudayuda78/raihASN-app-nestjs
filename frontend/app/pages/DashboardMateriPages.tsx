import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";

export function DashboardMateriPages() {
  return (
    <>
      <Box className="flex justify-between">
        <Box className="flex">
          <Input placeholder="medium size" size="md" />
          <Button
            bg="#5c40c2"
            color="white"
            _hover={{
              bg: "#4a32a0",
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
            transition="all 0.2s"
          >
            Search
          </Button>
        </Box>
        <Box>
          <Button
            bg="#5c40c2"
            color="white"
            _hover={{
              bg: "#4a32a0",
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
            transition="all 0.2s"
          >
            Add Materi
          </Button>
        </Box>
      </Box>
      <TableContainer>
        <Table variant="striped" colorScheme="purple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Judul</Th>
              <Th>Link PDF</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>
                <Button colorScheme="purple" size="xs">
                  Edit
                </Button>
                <Button colorScheme="red" size="xs">
                  Hapus
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>
                {" "}
                <Button colorScheme="purple" size="xs">
                  Edit
                </Button>
                <Button colorScheme="red" size="xs">
                  Hapus
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>
                {" "}
                <Button colorScheme="purple" size="xs">
                  Edit
                </Button>
                <Button colorScheme="red" size="xs">
                  Hapus
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
