import "./widget.css";
import ItemRecomendation from "./ItemRecomendation";
export default function Widget() {
  return (
    <div className="widget">
      <div className="widget__recomendations">
        <h3>Add to your feed</h3>
        <ItemRecomendation
          name="JobStreet Indonesia"
          description="Company Human Resource"
          avatar="https://media-exp1.licdn.com/dms/image/C510BAQG-MuDozE1Ehw/company-logo_100_100/0/1586740936818?e=1654128000&v=beta&t=sXKU_oOoNI8vvzPr2I_lC9qzySN46MCsL0aZ3zvAoM4"
        />
        <ItemRecomendation
          name="Ang Harry Tjahjono"
          description="General Manager, Human Capitral"
          avatar="https://media-exp1.licdn.com/dms/image/D5635AQFfrIASB0Ze3w/profile-framedphoto-shrink_100_100/0/1644654724602?e=1646272800&v=beta&t=nwVl3htbsguOmgf-mYvPDmg4N8c8YfBBE7fuYvQgqVI"
        />
        <ItemRecomendation
          name="Radityo Bagus Wicaksono"
          description="Recruitment Specialist at Hyundai"
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQEosMnSRZ1IXQ/profile-displayphoto-shrink_100_100/0/1610346626395?e=1651708800&v=beta&t=SsaQoak-eJ992Vu5MtF_rm8M7GbAPkIgEnVm00p1sOc"
        />
      </div>
      <div className="widget__ads">
        <img
          src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAACeUyGWuWBhQQLyxe1gEMEaZgw.png"
          alt=""
        />
      </div>
    </div>
  );
}
