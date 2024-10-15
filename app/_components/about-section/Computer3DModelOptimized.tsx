/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Yolala1232 (https://sketchfab.com/Yolala1232)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66
Title: Gaming Desktop PC
*/

import { Mesh, MeshStandardMaterial } from "three";
import {
  useGLTF,
  //  useVideoTexture
} from "@react-three/drei";
import { GLTF } from "three-stdlib";
// import { useFrame, useThree } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Cube018_Material017_0: Mesh;
    aorus_case_fans_aorus_case_fans_0: Mesh;
    Cube077_Material083_0: Mesh;
    Object_784_Material057_0: Mesh;
    Object_974_Material057_0: Mesh;
    Object_976_Material070_0: Mesh;
    Cube_Material_0: Mesh;
    Cube011_Material010_0: Mesh;
    Cylinder_Material009_0: Mesh;
    Cube015_Material016_0: Mesh;
    Cube020_Material020_0: Mesh;
    IOSHIELD_IOSHIELD_0: Mesh;
    MOBOAORUSORANGETRANS_MOBOAORUSORANGETRANS_0: Mesh;
    Cube025_Material023_0: Mesh;
    Cube026_Material024_0: Mesh;
    ["metal-mesh-500x500_metal-mesh-500x500_0"]: Mesh;
    Cube027_Material008_0: Mesh;
    Cube028_Material026_0: Mesh;
    Cube045_Material027_0: Mesh;
    ["rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0"]: Mesh;
    ["maxresdefault_(1)_maxresdefault_(1)_0"]: Mesh;
    Cylinder001_Material028_0: Mesh;
    NVIDIA_LOGO_NVIDIA_LOGO_0: Mesh;
    psuback_psuback_0: Mesh;
    usb_usb_0: Mesh;
    Cube048_Material035_0: Mesh;
    Cube049_Material040_0: Mesh;
    Cylinder005_Material041_0: Mesh;
    ["test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2_0"]: Mesh;
    Cylinder006_Material050_0: Mesh;
    Cylinder007_Material051_0: Mesh;
    Plane_Material053_0: Mesh;
    Cube057_Material059_0: Mesh;
    Cube058_Material063_0: Mesh;
    aorus_logotranspa_aorus_logotranspa_0: Mesh;
    Cube064_Material074_0: Mesh;
    Cube075_Material086_0: Mesh;
    ["Color-PewDiePie-Logo_Color-PewDiePie-Logo_0"]: Mesh;
    gallerymodel_gallerymodel_0: Mesh;
    bg2_bg2_0: Mesh;
    MY_SCREEN_MY_SCREEN_0: Mesh;
    ["gigabyte-logo_gigabyte-logo_0"]: Mesh;
    Cube004_Material002_0: Mesh;
    Object_47_Material005_0: Mesh;
    Object_49_Tasten_2_0: Mesh;
    Object_55_Material057_0: Mesh;
    Object_59_Material060_0: Mesh;
    Object_65_Material066_0: Mesh;
    Object_67_Material067_0: Mesh;
    Object_81_Material068_0: Mesh;
    Object_93_Material069_0: Mesh;
    Object_103_Material070_0: Mesh;
    ["Object_782_OnTheFly-bg_0"]: Mesh;
  };
  materials: {
    PaletteMaterial001: MeshStandardMaterial;
    ["Material.074_0"]: MeshStandardMaterial;
    ["Material.074_33"]: MeshStandardMaterial;
    ["Material.074_39"]: MeshStandardMaterial;
    Material: MeshStandardMaterial;
    ["Material.074"]: MeshStandardMaterial;
    ["Material.074_1"]: MeshStandardMaterial;
    ["Material.074_2"]: MeshStandardMaterial;
    ["Material.074_3"]: MeshStandardMaterial;
    ["Material.074_4"]: MeshStandardMaterial;
    ["Material.023"]: MeshStandardMaterial;
    ["Material.024"]: MeshStandardMaterial;
    ["Material.074_5"]: MeshStandardMaterial;
    ["Material.074_6"]: MeshStandardMaterial;
    ["Material.074_7"]: MeshStandardMaterial;
    ["Material.074_8"]: MeshStandardMaterial;
    ["Material.074_9"]: MeshStandardMaterial;
    ["Material.074_10"]: MeshStandardMaterial;
    ["Material.074_11"]: MeshStandardMaterial;
    ["Material.074_12"]: MeshStandardMaterial;
    ["Material.074_13"]: MeshStandardMaterial;
    ["Material.074_14"]: MeshStandardMaterial;
    ["Material.074_15"]: MeshStandardMaterial;
    ["Material.074_16"]: MeshStandardMaterial;
    ["Material.074_17"]: MeshStandardMaterial;
    ["Material.074_18"]: MeshStandardMaterial;
    ["Material.074_19"]: MeshStandardMaterial;
    ["Material.074_20"]: MeshStandardMaterial;
    ["Material.074_21"]: MeshStandardMaterial;
    ["Material.074_22"]: MeshStandardMaterial;
    ["Material.074_23"]: MeshStandardMaterial;
    ["Material.074_24"]: MeshStandardMaterial;
    ["Material.074_25"]: MeshStandardMaterial;
    ["Material.074_26"]: MeshStandardMaterial;
    ["Material.074_27"]: MeshStandardMaterial;
    ["Material.074_28"]: MeshStandardMaterial;
    ["Material.074_29"]: MeshStandardMaterial;
    ["Material.074_30"]: MeshStandardMaterial;
    ["Material.074_31"]: MeshStandardMaterial;
    ["Material.002"]: MeshStandardMaterial;
    ["Material.074_32"]: MeshStandardMaterial;
    Tasten_2: MeshStandardMaterial;
    ["Material.074_33"]: MeshStandardMaterial;
    ["Material.074_34"]: MeshStandardMaterial;
    ["Material.074_35"]: MeshStandardMaterial;
    ["Material.074_36"]: MeshStandardMaterial;
    ["Material.074_37"]: MeshStandardMaterial;
    ["Material.074_38"]: MeshStandardMaterial;
    ["Material.074_39"]: MeshStandardMaterial;
    ["Material.074_40"]: MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/desktopPcOptimized.glb") as GLTFResult;

  // const txt = useVideoTexture("./avengersVidEdit.mp4", {
  //   loop: true,
  //   muted: true,
  // });
  // const { invalidate } = useThree();

  // useFrame(() => {
  //   invalidate();
  // });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_784_Material057_0.geometry}
        material={materials["Material.074_33"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_974_Material057_0.geometry}
        material={materials["Material.074_33"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_976_Material070_0.geometry}
        material={materials["Material.074_39"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_Material_0.geometry}
        material={materials.Material}
        position={[-0.61023703, -0.0055571, 1.56090161]}
        rotation={[-Math.PI / 2, -9e-8, -Math.PI]}
        scale={[-3.68949516, 7.31636336, 0.25976097]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011_Material010_0.geometry}
        material={materials["Material.074"]}
        position={[-0.85935362, 1.99699916, -3.53720207]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.73489437, 0.89970602, 1.57347424]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_Material009_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.74209143, 0.5121781, -2.62894129]}
        scale={[0.060775, 0.06274786, 0.02277239]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015_Material016_0.geometry}
        material={materials["Material.074_1"]}
        position={[-1.65450283, 2.24122752, -4.40839559]}
        rotation={[-Math.PI / 2, -9e-8, -Math.PI]}
        scale={[-0.89374166, 0.00698901, 1.06434461]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020_Material020_0.geometry}
        material={materials["Material.074_2"]}
        position={[-0.96106695, 0.78825499, -3.63397758]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.60681088, 0.73932547, 0.34311977]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IOSHIELD_IOSHIELD_0.geometry}
        material={materials["Material.074_3"]}
        position={[-2.59688623, 2.84799341, -4.22490957]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.26475351, 0.30855052, 0.31832498]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MOBOAORUSORANGETRANS_MOBOAORUSORANGETRANS_0.geometry}
        material={materials["Material.074_4"]}
        position={[-2.35590907, 2.87746942, -4.23919058]}
        rotation={[-3.4e-7, 8.7e-7, 0.65059584]}
        scale={0.06343259}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025_Material023_0.geometry}
        material={materials["Material.023"]}
        position={[-1.65450283, 2.24122752, -4.40839559]}
        rotation={[-Math.PI / 2, -9e-8, -Math.PI]}
        scale={[-0.89374166, 0.00698901, 1.06434461]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026_Material024_0.geometry}
        material={materials["Material.024"]}
        position={[-1.65450283, 2.24122752, -4.40839559]}
        rotation={[-Math.PI / 2, -9e-8, -Math.PI]}
        scale={[-0.89374166, 0.00698901, 1.06434461]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["metal-mesh-500x500_metal-mesh-500x500_0"].geometry}
        material={materials["Material.074_5"]}
        position={[-0.42312385, 3.56983635, -3.54163505]}
        rotation={[Math.PI / 2, -1.5e-7, Math.PI]}
        scale={[0.99999998, 1.33704511, 0.99999998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027_Material008_0.geometry}
        material={materials["Material.074_6"]}
        position={[-0.96406477, 2.70962946, -4.30927114]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.01512891, 0.10916384, 0.44289523]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028_Material026_0.geometry}
        material={materials["Material.074_7"]}
        position={[-0.95709539, 2.70962946, -4.32409048]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.01051128, 0.0973474, 0.44411036]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045_Material027_0.geometry}
        material={materials["Material.074_8"]}
        position={[-2.12139537, 0.79398733, -2.9822796]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.3547594, 0.05165806, 0.2056838]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0"].geometry
        }
        material={materials["Material.074_9"]}
        position={[-0.93476904, 0.83167196, -2.88795831]}
        scale={0.36942245}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["maxresdefault_(1)_maxresdefault_(1)_0"].geometry}
        material={materials["Material.074_10"]}
        position={[0.87714132, 0.83614988, -3.55311546]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.39410709}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_Material028_0.geometry}
        material={materials["Material.074_11"]}
        position={[-1.69225124, 1.1440611, -0.71644316]}
        rotation={[-1.57079192, 1.5536567, -0.00000432]}
        scale={[0.19399732, 0.19399732, 0.02506321]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NVIDIA_LOGO_NVIDIA_LOGO_0.geometry}
        material={materials["Material.074_12"]}
        position={[0.00585914, 0.70428084, -2.89065667]}
        scale={0.45188758}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.psuback_psuback_0.geometry}
        material={materials["Material.074_13"]}
        position={[-2.60266168, 0.77970015, -3.52752434]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.59488642}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.usb_usb_0.geometry}
        material={materials["Material.074_14"]}
        position={[0.70472929, 3.57149894, -2.89694726]}
        rotation={[-Math.PI / 2, 6.7e-7, Math.PI / 2]}
        scale={0.07342104}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048_Material035_0.geometry}
        material={materials["Material.074_15"]}
        position={[-1.61353741, 2.68242059, -3.68170982]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.17436283, 0.39405284, 0.40074721]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049_Material040_0.geometry}
        material={materials["Material.074_16"]}
        position={[-1.61353741, 2.68242059, -3.68170982]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.17436283, 0.39405284, 0.40074721]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005_Material041_0.geometry}
        material={materials["Material.074_17"]}
        position={[-1.61138973, 2.68657983, -3.69024375]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.3271004, 0.3271004, 0.34212569]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes[
            "test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2_0"
          ].geometry
        }
        material={materials["Material.074_18"]}
        position={[-1.15854024, 1.50748288, -4.35222677]}
        scale={0.35193683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006_Material050_0.geometry}
        material={materials["Material.074_19"]}
        position={[-2.09451427, 1.84616024, -3.70096061]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.3635369, 0.38221534, 0.10574655]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_Material051_0.geometry}
        material={materials["Material.074_20"]}
        position={[-1.24439107, 1.84616024, -3.70096061]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.3635369, 0.38221534, 0.10574655]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_Material053_0.geometry}
        material={materials["Material.074_21"]}
        position={[1.1718205, 0.25604879, -0.29165357]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.24426717, 1.54111386, 1.19910573]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube057_Material059_0.geometry}
        material={materials["Material.074_22"]}
        position={[-1.27222058, 2.00080867, -3.70558585]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.28058942, 0.52443248, 0.12669409]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube058_Material063_0.geometry}
        material={materials["Material.074_23"]}
        position={[-1.22591107, 2.13708613, -3.70429405]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.3325903, 0.54503978, 0.00809464]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.aorus_logotranspa_aorus_logotranspa_0.geometry}
        material={materials["Material.074_24"]}
        position={[-1.82427608, 1.8169923, -3.15846642]}
        scale={[0.08645501, 0.08645501, 0.09089705]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube064_Material074_0.geometry}
        material={materials["Material.074_25"]}
        position={[1.11412549, 0.32446662, -0.27405919]}
        rotation={[Math.PI / 2, 9e-8, -Math.PI]}
        scale={[-0.42887012, 0.42887012, 0.22902246]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube075_Material086_0.geometry}
        material={materials["Material.074_26"]}
        position={[-2.580068, 1.95512386, -3.71510795]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.01163336, 0.5243508, 0.17742754]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Color-PewDiePie-Logo_Color-PewDiePie-Logo_0"].geometry}
        material={materials["Material.074_27"]}
        position={[1.29541196, 0.46552195, -0.27475896]}
        rotation={[-Math.PI / 2, 0.28377552, Math.PI / 2]}
        scale={[0.12411104, 0.12411107, 0.12411107]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gallerymodel_gallerymodel_0.geometry}
        material={materials["Material.074_28"]}
        position={[-1.42040463, 1.64812649, 5.96080492]}
        rotation={[0.44116908, -1.28418151, 0.44080623]}
        scale={[0.80689062, 0.80689055, 0.80689062]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bg2_bg2_0.geometry}
        material={materials["Material.074_29"]}
        position={[-1.53705258, 1.94916576, 0.83027334]}
        rotation={[1.57199344, -1.44152906, 1.56678481]}
        scale={[1.13033704, 1.13033704, 1.13033681]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MY_SCREEN_MY_SCREEN_0.geometry}
        material={materials["Material.074_30"]}
        position={[-1.36176526, 3.0013247, 3.00405358]}
        rotation={[-Math.PI / 2, 1.50098311, Math.PI / 2]}
        scale={[3.31621178, 3.48065239, 3.31621178]}
      />
      {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.MY_SCREEN_MY_SCREEN_0.geometry}
          material={materials["Material.074_30"]}
          position={[-136.17652893, 300.13247681, 300.40536499]}
          rotation={[-Math.PI / 2, 1.50098311, Math.PI / 2]}
          scale={[331.6211853, 348.06524658, 331.6211853]}
        >
          <meshBasicMaterial map={txt} />
        </mesh> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["gigabyte-logo_gigabyte-logo_0"].geometry}
        material={materials["Material.074_31"]}
        position={[-1.61542645, 4.49446615, 0.82082151]}
        rotation={[1.57078843, -1.50098319, 1.57078841]}
        scale={[0.236886, 0.23688606, 0.23688606]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_Material002_0.geometry}
        material={materials["Material.002"]}
        position={[-1.48740979, 1.80969829, 2.99246118]}
        rotation={[-Math.PI / 2, -0.06981318, Math.PI / 2]}
        scale={[1.67598919, 0.17793279, 1.93497966]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_47_Material005_0.geometry}
        material={materials["Material.074_32"]}
        position={[1.47708539, 0.32601142, 4.03086417]}
        rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
        scale={[0.91414846, 0.91414892, 0.91414892]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_49_Tasten_2_0.geometry}
        material={materials.Tasten_2}
        position={[1.47708539, 0.32601142, 4.03086417]}
        rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
        scale={[0.91414846, 0.91414892, 0.91414892]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_55_Material057_0.geometry}
        material={materials["Material.074_33"]}
        position={[1.47708539, 0.32601142, 4.03086417]}
        rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
        scale={[0.91414846, 0.91414892, 0.91414892]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_59_Material060_0.geometry}
        material={materials["Material.074_34"]}
        position={[1.47708539, 0.32601142, 4.03086417]}
        rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
        scale={[0.91414846, 0.91414892, 0.91414892]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_65_Material066_0.geometry}
        material={materials["Material.074_35"]}
        position={[1.47708539, 0.32601142, 4.03086417]}
        rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
        scale={[0.91414846, 0.91414892, 0.91414892]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_67_Material067_0.geometry}
        material={materials["Material.074_36"]}
        position={[1.47708539, 0.32601142, 4.03086417]}
        rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
        scale={[0.91414846, 0.91414892, 0.91414892]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_81_Material068_0.geometry}
        material={materials["Material.074_37"]}
        position={[1.47708539, 0.32601142, 4.03086417]}
        rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
        scale={[0.91414846, 0.91414892, 0.91414892]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_93_Material069_0.geometry}
        material={materials["Material.074_38"]}
        position={[1.47708539, 0.32601142, 4.03086417]}
        rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
        scale={[0.91414846, 0.91414892, 0.91414892]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_103_Material070_0.geometry}
        material={materials["Material.074_39"]}
        position={[1.47708539, 0.32601142, 4.03086417]}
        rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
        scale={[0.91414846, 0.91414892, 0.91414892]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Object_782_OnTheFly-bg_0"].geometry}
        material={materials["Material.074_40"]}
        position={[1.01600813, 0.40622078, 2.44007441]}
        rotation={[-Math.PI / 2, 0.0776536, Math.PI / 2]}
        scale={[0.21892584, 0.21892586, 0.21892586]}
      />
    </group>
  );
}

useGLTF.preload("/desktopPcOptimized.glb");
