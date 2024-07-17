import * as THREE from 'three';
import {
    Evaluator,
    EdgesHelper,
    Operation,
    OperationGroup,
    ADDITION,
    SUBTRACTION,
} from "three-bvh-csg";


export interface IHoleSettings {
    width: number;  // width of the hole as a percentage of the wall width
    height: number; // height of the hole as a percentage of the wall height
    depth: number;  // depth of the hole
    offsetLeft?: number; // offset of the hole from the left side of the wall as a percentage of the wall width
    offsetTop?: number; // offset of the hole from the top side of the wall as a percentage of the wall height
}

export interface IWallSettings {
    width: number;
    height: number;
    depth: number;
    position: THREE.Vector3;
    rotation: THREE.Euler;
    material: THREE.Material;
    holes?: IHoleSettings[];
}

export interface IBalconySettings {
    // Define the properties of the 'IBalconySettings' interface here
}

export interface IDoorSettings extends IHoleSettings {
    balcony?: IBalconySettings;
}

export interface IWindowSettings extends IHoleSettings {
    
}

export interface IStairsSettings {
    // Define the properties of the 'IStairsSettings' interface here
}