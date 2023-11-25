import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits,} from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
const icons = [<FaRegThumbsUp/>, <MdPeople/>, <MdOutlineProductionQuantityLimits/>, <GiTreeDoor/>]
export const Statistics = ({ title, stats }) => {
  
  return (
    <>
      {title&&<StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
{stats.length!==0&&stats.map(({id, title, total}, indx) => (

  <StatisticItem
    key = {id}
  title = {title}
    total={total}
    icon = {icons[indx]}
  
  />
))}


      </StatisticsList>
    </>
  );
};
