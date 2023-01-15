import { ReactComponent as Bookmark } from "../../public/bookmark.svg";
import styled from "styled-components";
import Link from "next/link";

const BookmarksIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    height="40"
    width="40"
  >
    <path d="M5 38.333V10q0-1.125.833-1.958.834-.834 1.959-.834h18.875q1.125 0 1.958.834.833.833.833 1.958v28.333l-12.25-5.208Zm2.792-4.208 9.416-4.083 9.459 4.083V10H7.792Zm24.416.042V4.458H9.792V1.667h22.416q1.125 0 1.959.833.833.833.833 1.958v29.709ZM7.792 10h18.875-9.459Z" />
  </svg>
);
const HomeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    height="40"
    width="40"
  >
    <path d="M7.5 35q-1.042 0-1.771-.729Q5 33.542 5 32.5v-3.167l6.667-5.916V35Zm5.833 0v-6.667h13.334V35Zm15 0V21.333L21.208 15l5.042-4.458 7.917 7.041q.416.375.625.855.208.479.208 1.02V32.5q0 1.042-.729 1.771Q33.542 35 32.5 35ZM5 27.083v-7.625q0-.541.208-1.041.209-.5.625-.834L18.333 6.5q.334-.333.771-.479.438-.146.896-.146t.896.146q.437.146.771.479L25 9.458Z" />
  </svg>
);
const ProfilIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    height="40"
    width="40"
  >
    <path d="M20 19.958q-2.75 0-4.562-1.812-1.813-1.813-1.813-4.563t1.813-4.562Q17.25 7.208 20 7.208t4.562 1.813q1.813 1.812 1.813 4.562t-1.813 4.563Q22.75 19.958 20 19.958ZM6.667 33.333v-4.166q0-1.542.77-2.688.771-1.146 2.021-1.729 2.709-1.25 5.313-1.896 2.604-.646 5.229-.646t5.208.646q2.584.646 5.334 1.896 1.25.625 2.02 1.75.771 1.125.771 2.667v4.166Zm2.791-2.791h21.084v-1.375q0-.584-.334-1.125-.333-.542-.833-.792-2.542-1.25-4.771-1.75T20 25q-2.375 0-4.625.5t-4.75 1.75q-.542.25-.854.792-.313.541-.313 1.125ZM20 17.208q1.542 0 2.583-1.041 1.042-1.042 1.042-2.584 0-1.541-1.042-2.583Q21.542 9.958 20 9.958q-1.542 0-2.583 1.042-1.042 1.042-1.042 2.583 0 1.542 1.042 2.584 1.041 1.041 2.583 1.041Zm0-3.625Zm0 16.959Z" />
  </svg>
);

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link href="/">{HomeIcon}</Link>
      <Link href="./Bookmarkpage">{BookmarksIcon}</Link>
      <Link href="./Profilpage">{ProfilIcon}</Link>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: space-around;
  background-color: grey;
`;
