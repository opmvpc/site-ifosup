import triangle from '../assets/ifosup/animation-triangle.svg';
import rond from '../assets/ifosup/animation-rond.svg';
import rondRouge from '../assets/ifosup/animation-rond_rouge.svg';
import cercle from '../assets/ifosup/animation-cercle.svg';

const blobs = [
  { src: triangle, className: 'shape shape-triangle one', alt: '' },
  { src: triangle, className: 'shape shape-triangle two', alt: '' },
  { src: rond, className: 'shape shape-round one', alt: '' },
  { src: rond, className: 'shape shape-round two', alt: '' },
  { src: rondRouge, className: 'shape shape-red one', alt: '' },
  { src: cercle, className: 'shape shape-circle one', alt: '' },
  { src: cercle, className: 'shape shape-circle two', alt: '' },
];

export default function AnimatedBackground() {
  return (
    <div className="animated-sky" aria-hidden="true">
      {blobs.map((blob, index) => (
        <img key={`${blob.className}-${index}`} src={blob.src} alt={blob.alt} className={blob.className} />
      ))}
      <div className="mesh mesh-a" />
      <div className="mesh mesh-b" />
      <div className="mesh mesh-c" />
    </div>
  );
}