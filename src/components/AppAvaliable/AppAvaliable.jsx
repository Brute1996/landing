import { Link } from "react-router-dom";
import { ReactComponent as AppleIcon } from "../../images/icons/apple-icon.svg"
import {ReactComponent as AndroidIcon} from "../../images/icons/android-icon.svg"
import { AppAvaliableStyle, AvaliableAppList } from "./AppAvaliable.styled";

export const AppAvalible = () => {
    return (
        <AppAvaliableStyle>
            <AvaliableAppList>
                <li>
                    <Link className="app-link">
                        <AppleIcon />
                    </Link>
                </li>
                <li>
                    <Link className="app-link">
                        <AndroidIcon />
                    </Link>
                </li>
            </AvaliableAppList>
            <h3 className="app-avaliable-title">App available</h3>
        </AppAvaliableStyle>
    )
};