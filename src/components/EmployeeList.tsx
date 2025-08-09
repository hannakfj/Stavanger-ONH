import { useTranslation } from "../features/language/useTranslation";
import { Box, Container } from "@mui/system";
import EmployeeCard from "./EmployeeCard";

function EmployeeList() {
  const { t } = useTranslation();
  const employees =
    t<{ name: string; position: string; image: string; description: string }[]>(
      "staff"
    );
  return (
    <Container sx={{ py: 4 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 4,
        }}
      >
        {employees.map((employee, index) => (
          <EmployeeCard
            key={index}
            name={employee.name}
            position={employee.position}
            experience={employee.description}
            image={employee.image}
          />
        ))}
      </Box>
    </Container>
  );
}

export default EmployeeList;
