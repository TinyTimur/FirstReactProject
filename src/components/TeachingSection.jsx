import WayToTeach from "./wayToTeach";
import { ways} from "../data";

export default function TeachingSection() {
    return <section>
              <h3>Наш подход к обучению</h3>
              <ul>
                {ways.map((way) => {
                  return  <WayToTeach key={way.title} {...way} />;
                })}
              </ul>
            </section>
}