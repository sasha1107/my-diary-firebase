import { useState } from "react";
import { useLogout } from "../../hooks/useLogout"
import { useAuthContext } from "../../hooks/useAuthContext";
import { useRandomMsg } from "../../hooks/useRandomMsg";
import NavView from "./NavView";

export default function Nav() {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const msg = useRandomMsg();
    const [isOpen, setIsOpen] = useState(false);

    const props = {
        logout,
        user,
        msg,
        isOpen,
        setIsOpen
    }

    return (
        <NavView {...props} />
    )
}
