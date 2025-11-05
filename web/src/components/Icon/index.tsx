import { AirplaneJourney } from "./AirplaneJourney";
import { AnimatedIcon } from "./AnimatedIcon";
import { BadgetCheckAlt } from "./BadgetCheckAlt";
import { BallotCheck } from "./BallotCheck";
import { BedAlt } from "./BedAlt";
import { BioLeaves } from "./BioLeaves";
import { Bolt } from "./Bolt";
import { Bulb } from "./Bulb";
import { Bullhorn } from "./Bullhorn";
import { CakeBirthday } from "./CakeBirthday";
import { CheckCircle } from "./CheckCircle";
import { CircleStar } from "./CircleStar";
import { CommentAltCheck } from "./CommentAltCheck";
import { Confetti } from "./Confetti";
import { Constellation } from "./Constellation";
import { CustomizeEdit } from "./CustomizeEdit";
import { Family } from "./Family";
import { FerrisWheel } from "./FerrisWheel";
import { FirstAward } from "./FirstAward";
import { GalaxyStar } from "./GalaxyStar";
import { GlassCheers } from "./GlassCheers";
import { GraphicStyle } from "./GraphicStyle";
import { HandsHeart } from "./HandsHeart";
import { Handshake } from "./Handshake";
import { HatChef } from "./HatChef";
import { HeadSideHeart } from "./HeadSideHeart";
import { Hotel } from "./Hotel";
import { HouseChimneyWindow } from "./HouseChimneyWindow";
import { InviteAlt } from "./InviteAlt";
import { LassoSparkles } from "./LassoSparkles";
import { Leadership } from "./Leadership";
import { LightbulbSetting } from "./LightbulbSetting";
import { MeetingAlt } from "./MeetingAlt";
import { Meeting } from "./Meeting";
import { Membership } from "./Membership";
import { MicrophoneAlt } from "./MicrophoneAlt";
import { Note } from "./Note";
import { ObjectsColumn } from "./ObjectsColumn";
import { PartyHorn } from "./PartyHorn";
import { PeopleArrowsLeftRight } from "./PeopleArrowsLeftRight";
import { PlaneAlt } from "./PlaneAlt";
import { RocketLunch } from "./RocketLunch";
import { StageTheatre } from "./StageTheatre";
import { Subway } from "./Subway";
import { SuitcaseAlt } from "./SuitcaseAlt";
import { TachometerAltFastest } from "./TachometerAltFastest";
import { TrophyStar } from "./TrophyStar";
import { Utensils } from "./Utensils";

export type Icons =
  | "airplane_journey"
  | "animated_icon"
  | "badget_check_alt"
  | "ballot_check"
  | "bed_alt"
  | "bio_leaves"
  | "bolt"
  | "bulb"
  | "bullhorn"
  | "cake_birthday"
  | "check_circle"
  | "circle_star"
  | "comment_alt_check"
  | "confetti"
  | "constellation"
  | "customize_edit"
  | "family"
  | "ferris_wheel"
  | "first_award"
  | "galaxy_star"
  | "glass_cheers"
  | "graphic_style"
  | "hands_heart"
  | "handshake"
  | "hat_chef"
  | "head_side_heart"
  | "hotel"
  | "house_chimney_window"
  | "invite_alt"
  | "lasso_sparkles"
  | "leadership"
  | "lightbulb_setting"
  | "meeting_alt"
  | "meeting"
  | "membership"
  | "microphone_alt"
  | "note"
  | "objects_column"
  | "party_horn"
  | "people_arrows_left_right"
  | "plane_alt"
  | "rocket_lunch"
  | "stage_theatre"
  | "subway"
  | "suitcase_alt"
  | "tachometer_alt_fastest"
  | "trophy_star"
  | "utensils";

type Props = {
  name: Icons;
};

const Icon = ({ name }: Props) => {
  const catalog = {
    airplane_journey: AirplaneJourney,
    animated_icon: AnimatedIcon,
    badget_check_alt: BadgetCheckAlt,
    ballot_check: BallotCheck,
    bed_alt: BedAlt,
    bio_leaves: BioLeaves,
    bolt: Bolt,
    bulb: Bulb,
    bullhorn: Bullhorn,
    cake_birthday: CakeBirthday,
    check_circle: CheckCircle,
    circle_star: CircleStar,
    comment_alt_check: CommentAltCheck,
    confetti: Confetti,
    constellation: Constellation,
    customize_edit: CustomizeEdit,
    family: Family,
    ferris_wheel: FerrisWheel,
    first_award: FirstAward,
    galaxy_star: GalaxyStar,
    glass_cheers: GlassCheers,
    graphic_style: GraphicStyle,
    hands_heart: HandsHeart,
    handshake: Handshake,
    hat_chef: HatChef,
    head_side_heart: HeadSideHeart,
    hotel: Hotel,
    house_chimney_window: HouseChimneyWindow,
    invite_alt: InviteAlt,
    lasso_sparkles: LassoSparkles,
    leadership: Leadership,
    lightbulb_setting: LightbulbSetting,
    meeting_alt: MeetingAlt,
    meeting: Meeting,
    membership: Membership,
    microphone_alt: MicrophoneAlt,
    note: Note,
    objects_column: ObjectsColumn,
    party_horn: PartyHorn,
    people_arrows_left_right: PeopleArrowsLeftRight,
    plane_alt: PlaneAlt,
    rocket_lunch: RocketLunch,
    stage_theatre: StageTheatre,
    subway: Subway,
    suitcase_alt: SuitcaseAlt,
    tachometer_alt_fastest: TachometerAltFastest,
    trophy_star: TrophyStar,
    utensils: Utensils,
  };

  return catalog[name as Icons] ? catalog[name as Icons]() : null;
};

export default Icon;
