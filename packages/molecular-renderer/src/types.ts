/**
 * Tipos para Molecular Renderer (Three.js)
 * Virtual Chemistry Lab (VCL) — Vickora Labs
 */

import type { MoleculeGraph, MolecularRepresentation, AtomInstance, BondInstance } from '@vcl/shared';
import * as THREE from 'three';

export interface RendererOptions {
  container: HTMLElement;
  representation?: MolecularRepresentation;
  enableShadows?: boolean;
  backgroundColor?: number;
  atomScale?: number;
  bondRadius?: number;
  showLabels?: boolean;
}

export interface AtomMeshUserData {
  atomId: string;
  symbol: string;
  atomicNumber: number;
  instance: AtomInstance;
}

export interface BondMeshUserData {
  bondId: string;
  atomAId: string;
  atomBId: string;
  order: 1 | 2 | 3;
  instance: BondInstance;
}

export type AtomSelectCallback = (atom: AtomInstance, mesh: THREE.Mesh) => void;
export type BondSelectCallback = (bond: BondInstance, group: THREE.Group) => void;
