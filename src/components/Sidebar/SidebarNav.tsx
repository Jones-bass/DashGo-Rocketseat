import { Box, Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href='/dashboard'>Dashboard</NavLink>
        <NavLink icon={RiContactsLine} href='/users'>Usuários</NavLink>
      </NavSection>

      <NavSection title='AUTOMAÇÃO'>
        <NavLink icon={RiInputMethodLine} href='/forms'>Formulários</NavLink>
        <NavLink icon={RiGitMergeLine} href='/automation'>Automação</NavLink>
      </NavSection>
      </Stack>
    </Box>
  );
}
