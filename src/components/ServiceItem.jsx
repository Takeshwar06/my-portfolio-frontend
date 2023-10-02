export default function ServiceItem({item}) {
    return (
        <div className="service-item padd-15">
            <div className="service-item-inner">
                <div className="icon">
                    <i className={`fa ${item.icon}`}></i>
                </div>
                <h4>{item.name}</h4>
                <p>{item.about}</p>
            </div>
        </div>
    )
}