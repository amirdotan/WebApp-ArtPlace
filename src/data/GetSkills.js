import { storage } from '../firebase';
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid'



export default function getSkill() {
    const skillList = ['After Effects', 'Animation', 'Architecture', 'CAD Modeling', 'Carpentry', 'Ceramics',
        'Chip Proccessing', 'Fashion', 'Glass', 'Glass Cutting', 'Glassblowing', 'Gloom', 'Goldsmiths',
        'Graphic Design', 'Illustration', 'Image Editing', 'Image Processing', 'Imagery', 'Industrial Design',
        'Leather Processing', 'Maya - Computer Animation', 'Packaging Design', 'Painting',
        'Parametric Design (Grasshofer)', 'Parametric Modeling (Grasshofer)', 'Photography', 'Production Planning',
        'Sculpturing', 'Sewing', 'Soldering ', 'Still Photography', 'Stone Cutting', 'Stop Motion', 'Templates',
        'UI Design', 'Video Editing', 'Video Shooting', 'Visual Communication', 'Welding'];
    return skillList;
};

