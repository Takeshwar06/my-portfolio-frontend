export default function Admin() {
    return (
        <section className="service section " id="service">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Admin</h2>
                    </div>
                </div>
                <div className="row admin">
                   <form>
                     <input  className="admin-input"type="text" name="" id="" placeholder="Image Url / Logo"/>
                     <input className="admin-input" type="text" name="" id="" placeholder="Web Link"/>
                     <input  className="admin-input"type="text" name="" id="" placeholder="Name"/>
                     <input  className="admin-input"type="text" name="" id="" placeholder="About"/>
                     <div className="admin-choices">
                        <input type="radio" name="for" value="project" id="t" />Poject
                        <input type="radio" name="for" value="coding" id="g" />coding
                        <input type="radio" name="for" value="drawing" id="h" />drawing
                        <input type="radio" name="for" value="sketch" id="e" />sketch
                        <input type="radio" name="for" value="certificate" id="e" />certificate
                     </div>
                     <button className="btn">Add</button>
                   </form>
                </div>
            </div>
        </section>
    )
}