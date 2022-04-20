import { Box, Stack } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";


export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>DashBoard</NavLink>
          <NavLink icon={RiDashboardLine}>usuarios</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiDashboardLine}>DashBoard</NavLink>
          <NavLink icon={RiDashboardLine}>usuarios</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
