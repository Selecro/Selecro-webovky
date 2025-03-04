import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('canvas') canvasRef!: ElementRef;

  private scene!: Scene;
  private camera!: PerspectiveCamera;
  private renderer!: WebGLRenderer;
  private loader!: GLTFLoader;
  private model!: any;

  constructor() { }

  ngOnInit(): void {
    this.initializeScene();
  }

  ngAfterViewInit(): void {
    if (this.canvasRef) {
      this.initializeRenderer();
      this.loadModel();
      this.animate();
    }
  }

  private initializeScene(): void {
    this.scene = new Scene();

    this.camera = new PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    const ambientLight = new AmbientLight(0x404040, 1);
    this.scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    this.scene.add(directionalLight);
  }

  private initializeRenderer(): void {
    if (this.canvasRef) {
      this.renderer = new WebGLRenderer({
        canvas: this.canvasRef.nativeElement,
        alpha: true
      });
      this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.setClearColor(0x000000, 0);
    }
  }

  private loadModel(): void {
    this.loader = new GLTFLoader();
    const modelPath = 'assets/yarn.glb';
    this.loader.load(modelPath, (gltf) => {
      this.model = gltf.scene;
      this.scene.add(this.model);
    }, undefined, (error) => {
      console.error('Error loading the model:', error);
    });
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    if (this.model) {
      this.model.rotation.z += 0.005;
      this.model.rotation.x += 0.005;
      this.model.rotation.y += 0.005;
    }
    if (this.renderer && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
