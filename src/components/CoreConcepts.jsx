import Coreconcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
        <h2>Core Concept</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptitem) => <Coreconcept key={conceptitem.title} {...conceptitem} />)}
          {/* <Coreconcept title={CORE_CONCEPTS[0].title} 
          description ={CORE_CONCEPTS[0].description }
          img={CORE_CONCEPTS[0].img} />
          <Coreconcept {...CORE_CONCEPTS[1]} />
          <Coreconcept {...CORE_CONCEPTS[2]} />
          <Coreconcept {...CORE_CONCEPTS[3]} /> */}
        </ul>
      </section>
    )
}