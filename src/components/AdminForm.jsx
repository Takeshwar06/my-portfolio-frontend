export default function AdminForm() {
    return (
        <form>
            <label htmlFor="Image">Image / Logo</label><br />
            <input className="admin-input" type="file" name="" id="" placeholder="Image  / Logo" />
            <input className="admin-input" type="text" name="" id="" placeholder="Web Link" />
            <input className="admin-input" type="text" name="" id="" placeholder="Name" />
            <input className="admin-input" type="text" name="" id="" placeholder="About" />
            <div className="admin-choices">
                <input type="radio" name="for" value="project" id="t" />Poject
                <input type="radio" name="for" value="coding" id="g" />coding
                <input type="radio" name="for" value="drawing" id="h" />drawing
                <input type="radio" name="for" value="sketch" id="e" />sketch
                <input type="radio" name="for" value="certificate" id="e" />certificate
            </div>
            <button className="btn">Add</button>
        </form>
    )
}