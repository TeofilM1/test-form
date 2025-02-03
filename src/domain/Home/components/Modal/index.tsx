import { IGetModal } from "./types";
import Image from "next/image";
import Close from "../../../../assets/Close.svg";

export const Modal = ({ name, setModal }: IGetModal) => {
  return (
    <div className="relative bottom-[500px] left-0 w-full h-full bg-white flex  ">
      <div className="max-w-[393px] pt-20 px-6 bg-white shadow-lg rounded-md">
        <div className="flex justify-end">
          <button
            type="button"
            className="h-8 rounded-md"
            onClick={() => setModal(false)}
          >
            <Image src={Close} width={28} height={28} alt="Close Icon" />
          </button>
        </div>
        <div className="flex flex-col gap-4 py-6">
          <h2 className="text-xl font-bold text-gray-900 ">{name}</h2>
          <p className="text-sm font-medium text-gray-700">
            Pirate ipsum arrgh bounty warp jack. Clipper driver the sloop
            anchor. Coast coxswain anchor jennys just furl pin gangway yellow.
            Ahoy timbers dead tender guns of arr round down bilge. Sink black
            avast plate tell her tender. Road tales halter grog gun. Splice
            bucko blossom schooner topsail jolly chantey bounty sloop coxswain.
            Or aft o&apos;nine run the dock belaying clipper. Hang ballast down
            topsail scurvy grog. Heave halter to spot log dock rat heave hands
            ipsum. Locker yer coxswain gold gangway. Grog pink deck men
            jones&apos; yawl yard fer. Lugsail starboard plate crack topsail.{" "}
            <br></br>
            <br></br>
            On starboard blow sail bow grog just arr. Pinnace privateer just
            american prey spot. Just topmast round hearties scurvy anchor cup
            blow smartly salmagundi. Sink shrouds belaying pay cutlass gangplank
            jolly killick lass. Parrel american six arr jack line. Starboard cog
            seas coffer hang rig boom belay to. Buccaneer blow piracy parrel
            down black timbers rig. Tails nipperkin ketch boom gold. Pirate
            topgallant plate jolly sheet dead. Crimp black crack boatswain men.
            <br></br>
            <br></br>
            Pin ipsum shot boat arr. Mizzen prey scurvy no crow&apos;s. Log
            roger schooner yer gangway coast piracy gunwalls. Chase yarr chains
            down arrgh hands spirits gun. Salmagundi scurvy yarr lugsail aye or
            bow shiver. Lass dock pin driver poop rat. Avast sail bilge rat
            gunwalls topsail pink.
          </p>
        </div>
        <div className="flex flex-col gap-4 py-6">
          <h2 className="text-xl font-bold text-gray-900 ">{name}</h2>
          <p className="text-sm font-medium text-gray-700">
            Pirate ipsum arrgh bounty warp jack. Clipper driver the sloop
            anchor. Coast coxswain anchor jennys just furl pin gangway yellow.
            Ahoy timbers dead tender guns of arr round down bilge. Sink black
            avast plate tell her tender. Road tales halter grog gun. Splice
            bucko blossom schooner topsail jolly chantey bounty sloop coxswain.
            Or aft o&apos;nine run the dock belaying clipper. Hang ballast down
            topsail scurvy grog. Heave halter to spot log dock rat heave hands
            ipsum. Locker yer coxswain gold gangway. Grog pink deck men
            jones&apos; yawl yard fer. Lugsail starboard plate crack topsail.{" "}
            <br></br>
            <br></br>
            On starboard blow sail bow grog just arr. Pinnace privateer just
            american prey spot. Just topmast round hearties scurvy anchor cup
            blow smartly salmagundi. Sink shrouds belaying pay cutlass gangplank
            jolly killick lass. Parrel american six arr jack line. Starboard cog
            seas coffer hang rig boom belay to. Buccaneer blow piracy parrel
            down black timbers rig. Tails nipperkin ketch boom gold. Pirate
            topgallant plate jolly sheet dead. Crimp black crack boatswain men.
            <br></br>
            <br></br>
            Pin ipsum shot boat arr. Mizzen prey scurvy no crow&apos;s. Log
            roger schooner yer gangway coast piracy gunwalls. Chase yarr chains
            down arrgh hands spirits gun. Salmagundi scurvy yarr lugsail aye or
            bow shiver. Lass dock pin driver poop rat. Avast sail bilge rat
            gunwalls topsail pink.
          </p>
        </div>
      </div>
    </div>
  );
};
