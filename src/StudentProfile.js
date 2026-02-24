import React from 'react';

// Sample student data organized by academic year
const studentData = {
  '2023-2024': [
    { id: 'S001', name: 'Rahul Kumar', dob: '2005-03-15', bloodType: 'O+', dateOfJoining: '2023-08-01', parentName: 'Raj Kumar', email: 'rahul.kumar@school.com', phone: '9876543210', mother: 'Priya Kumar', father: 'Raj Kumar', address: '123 Oak Street, Mumbai, MH 400001', city: 'Mumbai', state: 'Maharashtra', zipCode: '400001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Rahul+Kumar&size=200&background=4A90E2&color=fff' },
    { id: 'S002', name: 'Priya Singh', dob: '2005-06-22', bloodType: 'A+', dateOfJoining: '2023-08-01', parentName: 'Vikram Singh', email: 'priya.singh@school.com', phone: '9876543211', mother: 'Anjali Singh', father: 'Vikram Singh', address: '456 Pine Avenue, Delhi, DL 110001', city: 'Delhi', state: 'Delhi', zipCode: '110001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Priya+Singh&size=200&background=7B68EE&color=fff' },
    { id: 'S003', name: 'Arjun Patel', dob: '2005-01-10', bloodType: 'B+', dateOfJoining: '2023-08-01', parentName: 'Amit Patel', email: 'arjun.patel@school.com', phone: '9876543212', mother: 'Harsha Patel', father: 'Amit Patel', address: '789 Maple Lane, Bangalore, KA 560001', city: 'Bangalore', state: 'Karnataka', zipCode: '560001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Arjun+Patel&size=200&background=FF6B6B&color=fff' },
    { id: 'S010', name: 'Sneha Iyer', dob: '2005-09-12', bloodType: 'A-', dateOfJoining: '2023-08-01', parentName: 'Ramesh Iyer', email: 'sneha.iyer@school.com', phone: '9876543220', mother: 'Sunita Iyer', father: 'Ramesh Iyer', address: '321 Cedar Road, Chennai, TN 600001', city: 'Chennai', state: 'Tamil Nadu', zipCode: '600001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Sneha+Iyer&size=200&background=4ECDC4&color=fff' },
    { id: 'S011', name: 'Rohan Das', dob: '2005-12-05', bloodType: 'O-', dateOfJoining: '2023-08-01', parentName: 'Sanjay Das', email: 'rohan.das@school.com', phone: '9876543221', mother: 'Rina Das', father: 'Sanjay Das', address: '654 Birch Street, Kolkata, WB 700001', city: 'Kolkata', state: 'West Bengal', zipCode: '700001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Rohan+Das&size=200&background=95E1D3&color=fff' },
    { id: 'S012', name: 'Meera Nair', dob: '2005-04-18', bloodType: 'B-', dateOfJoining: '2023-08-01', parentName: 'Anil Nair', email: 'meera.nair@school.com', phone: '9876543222', mother: 'Kavya Nair', father: 'Anil Nair', address: '987 Elm Street, Kochi, KL 682001', city: 'Kochi', state: 'Kerala', zipCode: '682001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Meera+Nair&size=200&background=F38181&color=fff' },
    { id: 'S013', name: 'Kunal Mehta', dob: '2005-07-30', bloodType: 'AB+', dateOfJoining: '2023-08-01', parentName: 'Deepak Mehta', email: 'kunal.mehta@school.com', phone: '9876543223', mother: 'Divya Mehta', father: 'Deepak Mehta', address: '147 Sycamore Lane, Pune, MH 411001', city: 'Pune', state: 'Maharashtra', zipCode: '411001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Kunal+Mehta&size=200&background=AA96DA&color=fff' },
    { id: 'S014', name: 'Pooja Chawla', dob: '2005-02-25', bloodType: 'O+', dateOfJoining: '2023-08-01', parentName: 'Rohit Chawla', email: 'pooja.chawla@school.com', phone: '9876543224', mother: 'Neha Chawla', father: 'Rohit Chawla', address: '258 Walnut Drive, Jaipur, RJ 302001', city: 'Jaipur', state: 'Rajasthan', zipCode: '302001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Pooja+Chawla&size=200&background=FCBAD3&color=fff' },
    { id: 'S015', name: 'Manish Yadav', dob: '2005-11-14', bloodType: 'A+', dateOfJoining: '2023-08-01', parentName: 'Dinesh Yadav', email: 'manish.yadav@school.com', phone: '9876543225', mother: 'Geeta Yadav', father: 'Dinesh Yadav', address: '369 Oak Boulevard, Lucknow, UP 226001', city: 'Lucknow', state: 'Uttar Pradesh', zipCode: '226001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Manish+Yadav&size=200&background=A8D8EA&color=fff' },
    { id: 'S016', name: 'Aisha Khan', dob: '2005-08-09', bloodType: 'AB-', dateOfJoining: '2023-08-01', parentName: 'Imran Khan', email: 'aisha.khan@school.com', phone: '9876543226', mother: 'Fatima Khan', father: 'Imran Khan', address: '741 Pine Court, Hyderabad, TG 500001', city: 'Hyderabad', state: 'Telangana', zipCode: '500001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Aisha+Khan&size=200&background=FFB6C1&color=fff' },
  ],
  '2024-2025': [
    { id: 'S004', name: 'Ananya Sharma', dob: '2006-02-14', bloodType: 'AB+', dateOfJoining: '2024-08-01', parentName: 'Rohit Sharma', email: 'ananya.sharma@school.com', phone: '9876543213', mother: 'Pooja Sharma', father: 'Rohit Sharma', address: '852 Spruce Road, Pune, MH 411001', city: 'Pune', state: 'Maharashtra', zipCode: '411001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Ananya+Sharma&size=200&background=DDA15E&color=fff' },
    { id: 'S005', name: 'Vikram Reddy', dob: '2006-05-08', bloodType: 'O-', dateOfJoining: '2024-08-01', parentName: 'Suresh Reddy', email: 'vikram.reddy@school.com', phone: '9876543214', mother: 'Laxmi Reddy', father: 'Suresh Reddy', address: '963 Ash Avenue, Hyderabad, TG 500001', city: 'Hyderabad', state: 'Telangana', zipCode: '500001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Vikram+Reddy&size=200&background=AA96DA&color=fff' },
    { id: 'S017', name: 'Divya Menon', dob: '2006-10-21', bloodType: 'A+', dateOfJoining: '2024-08-01', parentName: 'Rajeev Menon', email: 'divya.menon@school.com', phone: '9876543230', mother: 'Deepa Menon', father: 'Rajeev Menon', address: '147 King Street, Kochi, KL 682001', city: 'Kochi', state: 'Kerala', zipCode: '682001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Divya+Menon&size=200&background=F4A261&color=fff' },
    { id: 'S018', name: 'Harsh Vardhan', dob: '2006-01-19', bloodType: 'B+', dateOfJoining: '2024-08-01', parentName: 'Mahesh Vardhan', email: 'harsh.vardhan@school.com', phone: '9876543231', mother: 'Sunanda Vardhan', father: 'Mahesh Vardhan', address: '258 Queen Lane, Bangalore, KA 560001', city: 'Bangalore', state: 'Karnataka', zipCode: '560001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Harsh+Vardhan&size=200&background=2A9D8F&color=fff' },
    { id: 'S019', name: 'Tanya Kapoor', dob: '2006-06-30', bloodType: 'O+', dateOfJoining: '2024-08-01', parentName: 'Rakesh Kapoor', email: 'tanya.kapoor@school.com', phone: '9876543232', mother: 'Renu Kapoor', father: 'Rakesh Kapoor', address: '369 Prince Street, Delhi, DL 110001', city: 'Delhi', state: 'Delhi', zipCode: '110001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Tanya+Kapoor&size=200&background=E76F51&color=fff' },
    { id: 'S020', name: 'Nikhil Joshi', dob: '2006-03-11', bloodType: 'A-', dateOfJoining: '2024-08-01', parentName: 'Sunil Joshi', email: 'nikhil.joshi@school.com', phone: '9876543233', mother: 'Meena Joshi', father: 'Sunil Joshi', address: '741 Royal Road, Mumbai, MH 400001', city: 'Mumbai', state: 'Maharashtra', zipCode: '400001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Nikhil+Joshi&size=200&background=D62828&color=fff' },
    { id: 'S021', name: 'Shruti Rao', dob: '2006-07-07', bloodType: 'B-', dateOfJoining: '2024-08-01', parentName: 'Prakash Rao', email: 'shruti.rao@school.com', phone: '9876543234', mother: 'Sunita Rao', father: 'Prakash Rao', address: '852 Sultan Lane, Chennai, TN 600001', city: 'Chennai', state: 'Tamil Nadu', zipCode: '600001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Shruti+Rao&size=200&background=F77F00&color=fff' },
    { id: 'S022', name: 'Yash Malhotra', dob: '2006-12-02', bloodType: 'AB-', dateOfJoining: '2024-08-01', parentName: 'Ajay Malhotra', email: 'yash.malhotra@school.com', phone: '9876543235', mother: 'Neelam Malhotra', father: 'Ajay Malhotra', address: '963 Teddy Street, Jaipur, RJ 302001', city: 'Jaipur', state: 'Rajasthan', zipCode: '302001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Yash+Malhotra&size=200&background=06A77D&color=fff' },
    { id: 'S023', name: 'Komal Desai', dob: '2006-09-15', bloodType: 'O-', dateOfJoining: '2024-08-01', parentName: 'Sanjay Desai', email: 'komal.desai@school.com', phone: '9876543236', mother: 'Shweta Desai', father: 'Sanjay Desai', address: '147 Unity Lane, Pune, MH 411001', city: 'Pune', state: 'Maharashtra', zipCode: '411001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Komal+Desai&size=200&background=D62828&color=fff' },
    { id: 'S024', name: 'Aman Arora', dob: '2006-04-27', bloodType: 'A+', dateOfJoining: '2024-08-01', parentName: 'Vinod Arora', email: 'aman.arora@school.com', phone: '9876543237', mother: 'Kavya Arora', father: 'Vinod Arora', address: '258 Victor Lane, Delhi, DL 110001', city: 'Delhi', state: 'Delhi', zipCode: '110001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Aman+Arora&size=200&background=FFB703&color=fff' },
  ],
  '2025-2026': [
    { id: 'S006', name: 'Neha Gupta', dob: '2007-07-20', bloodType: 'A-', dateOfJoining: '2025-08-01', parentName: 'Sanjay Gupta', email: 'neha.gupta@school.com', phone: '9876543215', mother: 'Rashmi Gupta', father: 'Sanjay Gupta', address: '369 Water Street, Mumbai, MH 400001', city: 'Mumbai', state: 'Maharashtra', zipCode: '400001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Neha+Gupta&size=200&background=FB5607&color=fff' },
    { id: 'S007', name: 'Aditya Verma', dob: '2007-04-12', bloodType: 'B-', dateOfJoining: '2025-08-01', parentName: 'Manoj Verma', email: 'aditya.verma@school.com', phone: '9876543216', mother: 'Mamta Verma', father: 'Manoj Verma', address: '741 Xray Lane, Bangalore, KA 560001', city: 'Bangalore', state: 'Karnataka', zipCode: '560001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Aditya+Verma&size=200&background=3A86FF&color=fff' },
    { id: 'S008', name: 'Riya Joshi', dob: '2007-09-05', bloodType: 'O+', dateOfJoining: '2025-08-01', parentName: 'Rajesh Joshi', email: 'riya.joshi@school.com', phone: '9876543217', mother: 'Shweta Joshi', father: 'Rajesh Joshi', address: '852 Yankee Street, Pune, MH 411001', city: 'Pune', state: 'Maharashtra', zipCode: '411001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Riya+Joshi&size=200&background=8338EC&color=fff' },
    { id: 'S025', name: 'Kabir Shah', dob: '2007-02-18', bloodType: 'AB+', dateOfJoining: '2025-08-01', parentName: 'Vijay Shah', email: 'kabir.shah@school.com', phone: '9876543240', mother: 'Neha Shah', father: 'Vijay Shah', address: '963 Zulu Street, Hyderabad, TG 500001', city: 'Hyderabad', state: 'Telangana', zipCode: '500001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Kabir+Shah&size=200&background=FFBE0B&color=fff' },
    { id: 'S026', name: 'Ishita Paul', dob: '2007-06-22', bloodType: 'O-', dateOfJoining: '2025-08-01', parentName: 'Rohit Paul', email: 'ishita.paul@school.com', phone: '9876543241', mother: 'Anjali Paul', father: 'Rohit Paul', address: '147 Apple Lane, Chennai, TN 600001', city: 'Chennai', state: 'Tamil Nadu', zipCode: '600001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Ishita+Paul&size=200&background=FB5607&color=fff' },
    { id: 'S027', name: 'Dev Mallick', dob: '2007-01-30', bloodType: 'A+', dateOfJoining: '2025-08-01', parentName: 'Sourav Mallick', email: 'dev.mallick@school.com', phone: '9876543242', mother: 'Priya Mallick', father: 'Sourav Mallick', address: '258 Banana Lane, Kolkata, WB 700001', city: 'Kolkata', state: 'West Bengal', zipCode: '700001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Dev+Mallick&size=200&background=FF006E&color=fff' },
    { id: 'S028', name: 'Lavanya Ramesh', dob: '2007-08-14', bloodType: 'B+', dateOfJoining: '2025-08-01', parentName: 'Ramesh Kumar', email: 'lavanya.ramesh@school.com', phone: '9876543243', mother: 'Laxmi Devi', father: 'Ramesh Kumar', address: '369 Cherry Lane, Kochi, KL 682001', city: 'Kochi', state: 'Kerala', zipCode: '682001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Lavanya+Ramesh&size=200&background=8338EC&color=fff' },
    { id: 'S029', name: 'Aravind Subramani', dob: '2007-10-09', bloodType: 'O+', dateOfJoining: '2025-08-01', parentName: 'Subramani Iyer', email: 'aravind.subramani@school.com', phone: '9876543244', mother: 'Lakshmi Iyer', father: 'Subramani Iyer', address: '741 Date Street, Pune, MH 411001', city: 'Pune', state: 'Maharashtra', zipCode: '411001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Aravind+Subramani&size=200&background=3A86FF&color=fff' },
    { id: 'S030', name: 'Sanya Bhatia', dob: '2007-03-17', bloodType: 'AB-', dateOfJoining: '2025-08-01', parentName: 'Karan Bhatia', email: 'sanya.bhatia@school.com', phone: '9876543245', mother: 'Simone Bhatia', father: 'Karan Bhatia', address: '852 Elephant Street, Mumbai, MH 400001', city: 'Mumbai', state: 'Maharashtra', zipCode: '400001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Sanya+Bhatia&size=200&background=FFBE0B&color=fff' },
    { id: 'S031', name: 'Ritvik Kulkarni', dob: '2007-11-28', bloodType: 'A-', dateOfJoining: '2025-08-01', parentName: 'Mohan Kulkarni', email: 'ritvik.kulkarni@school.com', phone: '9876543246', mother: 'Savitri Kulkarni', father: 'Mohan Kulkarni', address: '963 Fern Road, Bangalore, KA 560001', city: 'Bangalore', state: 'Karnataka', zipCode: '560001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Ritvik+Kulkarni&size=200&background=FB5607&color=fff' },
  ],
  '2026-2027': [
    { id: 'S009', name: 'Karan Singh', dob: '2008-11-18', bloodType: 'AB-', dateOfJoining: '2026-08-01', parentName: 'Harish Singh', email: 'karan.singh@school.com', phone: '9876543218', mother: 'Geeta Singh', father: 'Harish Singh', address: '147 Grape Street, Delhi, DL 110001', city: 'Delhi', state: 'Delhi', zipCode: '110001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Karan+Singh&size=200&background=FF006E&color=fff' },
    { id: 'S032', name: 'Mitali Saha', dob: '2008-05-06', bloodType: 'O+', dateOfJoining: '2026-08-01', parentName: 'Anup Saha', email: 'mitali.saha@school.com', phone: '9876543250', mother: 'Ishita Saha', father: 'Anup Saha', address: '258 Hibiscus Lane, Hyderabad, TG 500001', city: 'Hyderabad', state: 'Telangana', zipCode: '500001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Mitali+Saha&size=200&background=06A77D&color=fff' },
    { id: 'S033', name: 'Rudra Prakash', dob: '2008-02-19', bloodType: 'B+', dateOfJoining: '2026-08-01', parentName: 'Suresh Prakash', email: 'rudra.prakash@school.com', phone: '9876543251', mother: 'Indira Prakash', father: 'Suresh Prakash', address: '369 Iris Lane, Chennai, TN 600001', city: 'Chennai', state: 'Tamil Nadu', zipCode: '600001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Rudra+Prakash&size=200&background=DDA15E&color=fff' },
    { id: 'S034', name: 'Anjali Thomas', dob: '2008-07-25', bloodType: 'A+', dateOfJoining: '2026-08-01', parentName: 'Joseph Thomas', email: 'anjali.thomas@school.com', phone: '9876543252', mother: 'Tina Thomas', father: 'Joseph Thomas', address: '741 Jasmine Lane, Kochi, KL 682001', city: 'Kochi', state: 'Kerala', zipCode: '682001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Anjali+Thomas&size=200&background=F77F00&color=fff' },
    { id: 'S035', name: 'Varun Pillai', dob: '2008-04-03', bloodType: 'O-', dateOfJoining: '2026-08-01', parentName: 'Ravi Pillai', email: 'varun.pillai@school.com', phone: '9876543253', mother: 'Savitri Pillai', father: 'Ravi Pillai', address: '852 Kiwi Street, Pune, MH 411001', city: 'Pune', state: 'Maharashtra', zipCode: '411001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Varun+Pillai&size=200&background=AA96DA&color=fff' },
    { id: 'S036', name: 'Sara Ali', dob: '2008-09-10', bloodType: 'AB+', dateOfJoining: '2026-08-01', parentName: 'Farhan Ali', email: 'sara.ali@school.com', phone: '9876543254', mother: 'Zara Ali', father: 'Farhan Ali', address: '963 Lavender Lane, Jaipur, RJ 302001', city: 'Jaipur', state: 'Rajasthan', zipCode: '302001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Sara+Ali&size=200&background=2A9D8F&color=fff' },
    { id: 'S037', name: 'Tejas Deshmukh', dob: '2008-01-14', bloodType: 'B-', dateOfJoining: '2026-08-01', parentName: 'Nitin Deshmukh', email: 'tejas.deshmukh@school.com', phone: '9876543255', mother: 'Renuka Deshmukh', father: 'Nitin Deshmukh', address: '147 Mint Street, Bangalore, KA 560001', city: 'Bangalore', state: 'Karnataka', zipCode: '560001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Tejas+Deshmukh&size=200&background=E76F51&color=fff' },
    { id: 'S038', name: 'Nandini Kapoor', dob: '2008-06-08', bloodType: 'A-', dateOfJoining: '2026-08-01', parentName: 'Rohit Kapoor', email: 'nandini.kapoor@school.com', phone: '9876543256', mother: 'Kavya Kapoor', father: 'Rohit Kapoor', address: '258 Nutmeg Lane, Mumbai, MH 400001', city: 'Mumbai', state: 'Maharashtra', zipCode: '400001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Nandini+Kapoor&size=200&background=D62828&color=fff' },
    { id: 'S039', name: 'Krish Agarwal', dob: '2008-12-01', bloodType: 'O+', dateOfJoining: '2026-08-01', parentName: 'Alok Agarwal', email: 'krish.agarwal@school.com', phone: '9876543257', mother: 'Pooja Agarwal', father: 'Alok Agarwal', address: '369 Orchid Street, Delhi, DL 110001', city: 'Delhi', state: 'Delhi', zipCode: '110001', gender: 'Male', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Krish+Agarwal&size=200&background=FFB703&color=fff' },
    { id: 'S040', name: 'Ira Mukherjee', dob: '2008-03-22', bloodType: 'AB-', dateOfJoining: '2026-08-01', parentName: 'Sudip Mukherjee', email: 'ira.mukherjee@school.com', phone: '9876543258', mother: 'Rita Mukherjee', father: 'Sudip Mukherjee', address: '741 Pepper Lane, Kolkata, WB 700001', city: 'Kolkata', state: 'West Bengal', zipCode: '700001', gender: 'Female', nationality: 'Indian', profileImage: 'https://ui-avatars.com/api/?name=Ira+Mukherjee&size=200&background=06A77D&color=fff' },
  ]
};

export default function StudentProfile({ studentId, onBack }) {
  // Find the student across all years
  let selectedStudent = null;
  for (let year in studentData) {
    const student = studentData[year].find(s => s.id === studentId);
    if (student) {
      selectedStudent = student;
      break;
    }
  }

  if (!selectedStudent) {
    return (
      <div className="profile-container">
        <button className="back-btn" onClick={onBack}>← Back to Students</button>
        <p>Student not found</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <button className="back-btn" onClick={onBack}>← Back to Students</button>
      
      <div className="profile-card">
        <div className="profile-wrapper">
          <div className="profile-sidebar">
            <img src={selectedStudent.profileImage} alt={selectedStudent.name} className="profile-image" />
            <div className="profile-sidebar-info">
              <h1>{selectedStudent.name}</h1>
              <p className="roll-number">{selectedStudent.id}</p>
              <div className="quick-info">
                <div className="quick-info-item">
                  <label>Gender</label>
                  <p>{selectedStudent.gender}</p>
                </div>
                <div className="quick-info-item">
                  <label>Blood Type</label>
                  <p>{selectedStudent.bloodType}</p>
                </div>
                <div className="quick-info-item">
                  <label>Email</label>
                  <p>{selectedStudent.email}</p>
                </div>
                <div className="quick-info-item">
                  <label>Phone</label>
                  <p>{selectedStudent.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-content-horizontal">
            <div className="profile-column">
              <div className="profile-section-horizontal">
                <h2>Personal Details</h2>
                <div className="info-list">
                  <div className="info-item-horizontal">
                    <label>Date of Birth</label>
                    <p>{selectedStudent.dob}</p>
                  </div>
                  <div className="info-item-horizontal">
                    <label>Nationality</label>
                    <p>{selectedStudent.nationality}</p>
                  </div>
                  <div className="info-item-horizontal">
                    <label>Date of Joining</label>
                    <p>{selectedStudent.dateOfJoining}</p>
                  </div>
                </div>
              </div>

              <div className="profile-section-horizontal">
                <h2>Guardian Info</h2>
                <div className="info-list">
                  <div className="info-item-horizontal">
                    <label>Guardian</label>
                    <p>{selectedStudent.parentName}</p>
                  </div>
                  <div className="info-item-horizontal">
                    <label>Father</label>
                    <p>{selectedStudent.father}</p>
                  </div>
                  <div className="info-item-horizontal">
                    <label>Mother</label>
                    <p>{selectedStudent.mother}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-column">
              <div className="profile-section-horizontal">
                <h2>Address</h2>
                <div className="info-list">
                  <div className="info-item-horizontal full-height">
                    <label>Street Address</label>
                    <p>{selectedStudent.address}</p>
                  </div>
                  <div className="info-item-horizontal">
                    <label>City</label>
                    <p>{selectedStudent.city}</p>
                  </div>
                  <div className="info-item-horizontal">
                    <label>State</label>
                    <p>{selectedStudent.state}</p>
                  </div>
                  <div className="info-item-horizontal">
                    <label>Zip Code</label>
                    <p>{selectedStudent.zipCode}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
