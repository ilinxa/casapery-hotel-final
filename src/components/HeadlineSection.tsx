
import { SectionHeaderProps } from '../types/types'
import SectionHeader from './common/SectionHeader'


const HeadlineSection = ( props : SectionHeaderProps ) => {
  return (
    <section className="pt-20 bg-transparent px-6" >
 
      <SectionHeader tagline={props.tagline} title={ props.title}  description={ props.description}
      />

    </section>
  )
}

export default HeadlineSection
