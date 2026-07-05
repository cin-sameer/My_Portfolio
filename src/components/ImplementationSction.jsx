import "./implementation.css"
import { implementations } from "../data/implementations"
import ImplementationCard from "./ImplementationCard"

export default function ImplementationSection() {
    return (
        <section className="implementation-section" id="learning">
            <div className="implementation-header">
                {/* Label badge */}
                <div className="implementation-label">
                    <span></span>
                    Learning &amp; Research
                </div>

                <h2>
                    My <span className="accent">Implementations</span>
                </h2>

                <p>
                    Classic architectures rebuilt from scratch — exploring the mechanics
                    of deep learning through hands-on experimentation.
                </p>
            </div>

            <div className="implementation-grid">
                {implementations.map((item, i) => (
                    <ImplementationCard key={item.id} item={item} index={i} />
                ))}
            </div>
        </section>
    )
}