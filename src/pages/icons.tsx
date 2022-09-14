import ArrowLeft from '@svg/feather/ArrowLeft';
import ArrowRight from '@svg/feather/ArrowRight';
import ArrowRightCircle from '@svg/feather/ArrowRightCircle';
import ArrowUp from '@svg/feather/ArrowUp';
import AtSign from '@svg/feather/AtSign';
import Calendar from '@svg/feather/Calendar';
import Camera from '@svg/feather/Camera';
import ChevronLeft from '@svg/feather/ChevronLeft';
import ChevronRight from '@svg/feather/ChevronRight';
import ChevronsLeft from '@svg/feather/ChevronsLeft';
import ChevronsRight from '@svg/feather/ChevronsRight';
import Chrome from '@svg/feather/Chrome';
import Edit from '@svg/feather/Edit';
import Eye from '@svg/feather/Eye';
import EyeOff from '@svg/feather/EyeOff';
import Facebook from '@svg/feather/Facebook';
import FileText from '@svg/feather/FileText';
import Github from '@svg/feather/Github';
import Globe from '@svg/feather/Globe';
import Instagram from '@svg/feather/Instagram';
import Printer from '@svg/feather/Printer';
import Twitter from '@svg/feather/Twitter';
import User from '@svg/feather/User';
import XCircle from '@svg/feather/XCircle';

import styled from 'styled-components';

function icons(): JSX.Element {
  const test = {
    value: 'hi',
    value: 'hiss',
  };
  return (
    <Container>
      <ArrowRight />
      <ArrowLeft />
      <ArrowRightCircle />
      <ArrowUp />
      <AtSign />
      <Calendar />
      <Camera />
      <ChevronLeft />
      <ChevronRight />
      <ChevronsLeft />
      <ChevronsRight />
      <Chrome />
      <Edit />
      <Eye />
      <EyeOff />
      <Facebook />
      <FileText />
      <Github />
      <Globe />
      <Instagram />
      <Printer />
      <Twitter />
      <User />
      <XCircle />
    </Container>
  );
}

export default icons;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  display: flex;
  gap: 10px;
`;
