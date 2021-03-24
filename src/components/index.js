import Vue from 'vue';
import Child from './Child';
import SButton from './UI/SButton';
import SCardGroup from './UI/SCard/SCardGroup';
import SChip from './UI/SChip';
import STextField from './UI/STextField';
import STransition from './UI/STransition';
import SSpinner from './UI/SSpinner';
import SAvatar from './UI/SAvatar';
import SSwitch from './UI/SSwitch';
import SSelect from './UI/SSelect';

import {
  SCard,
  SCardTitle,
  SCardSubTitle,
  SCardText,
  SCardBody,
} from './UI/SCard';

[
  Child,
  SButton,
  SCard,
  SCardTitle,
  SCardSubTitle,
  SCardGroup,
  SCardText,
  SCardBody,
  SChip,
  STextField,
  STransition,
  SSpinner,
  SAvatar,
  SSwitch,
  SSelect,
].forEach(component => {
  Vue.component(component.name, component);
});
