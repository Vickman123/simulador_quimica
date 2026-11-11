/**
 * Bus de eventos fuertemente tipado para Virtual Chemistry Lab (VCL)
 */

import type {
  ElementData,
  AtomInstance,
  BondInstance,
  MoleculeGraph,
  MolecularRepresentation,
  AtomicModelType,
  VerifiedReaction,
} from './types.js';

export interface VCLEvents {
  'element:selected': ElementData;
  'atom:added': AtomInstance;
  'atom:removed': string; // atomId
  'atom:updated': AtomInstance;
  'bond:created': BondInstance;
  'bond:removed': string; // bondId
  'molecule:changed': MoleculeGraph;
  'molecule:cleared': void;
  'representation:changed': MolecularRepresentation;
  'atomicModel:changed': AtomicModelType;
  'reaction:selected': VerifiedReaction;
  'reaction:executed': { reaction: VerifiedReaction; progress: number };
  'xr:sessionState': { isVR: boolean; supported: boolean };
  'lab:notification': { title: string; message: string; type: 'info' | 'success' | 'warning' | 'error' };
}

export type EventCallback<T> = (data: T) => void;

export class TypedEventBus {
  private listeners: { [K in keyof VCLEvents]?: Set<EventCallback<any>> } = {};

  public on<K extends keyof VCLEvents>(event: K, callback: EventCallback<VCLEvents[K]>): () => void {
    if (!this.listeners[event]) {
      this.listeners[event] = new Set();
    }
    this.listeners[event]!.add(callback);
    return () => this.off(event, callback);
  }

  public off<K extends keyof VCLEvents>(event: K, callback: EventCallback<VCLEvents[K]>): void {
    this.listeners[event]?.delete(callback);
  }

  public emit<K extends keyof VCLEvents>(event: K, data: VCLEvents[K]): void {
    this.listeners[event]?.forEach((cb) => {
      try {
        cb(data);
      } catch (err) {
        console.error(`[VCLEventBus] Error en listener para evento '${String(event)}':`, err);
      }
    });
  }

  public clear(): void {
    this.listeners = {};
  }
}

export const eventBus = new TypedEventBus();
