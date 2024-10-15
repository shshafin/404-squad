import { useState } from "react";
import {
  Dialog,
  DialogHeader,
  Typography,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faBookReader,
  faChalkboardTeacher,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import cat from "../../assets/cat.json";
import love from "../../assets/love.json";

const Art = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const renderItems = (items) => {
    return items.map((item, index) => (
      <motion.li
        key={index}
        className="flex items-center mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-green-500 mr-2 text-xl animate-bounce"
        />
        <span>{item}</span>
      </motion.li>
    ));
  };

  const tabAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <style>
        {`
          .card {
            transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
            border-radius: 20px;
            position: relative;
            overflow: hidden;
            background-color: white; /* Keep the card background white */
          }

          .card:hover {
            transform: scale(1.05);
            box-shadow: 
              0 15px 30px rgba(0, 204, 204, 0.7), 
              0 0 40px rgba(0, 204, 204, 0.7); /* Enhanced shadow effect */
          }

          .tab-content {
            transition: transform 0.5s;
            background: rgba(255, 255, 255, 0.8); /* Keep this transparent white */
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
          }

          .perspective-1000 {
            perspective: 1000px;
          }

          /* Tab button styles */
          .tab-button {
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            padding: 1rem;
            color: white;
            transition: color 0.3s;
            background: linear-gradient(90deg, rgba(0, 204, 204, 0.9), rgba(0, 102, 204, 0.9)); /* Gradient background */
          }

          .tab-button:hover {
            color: rgba(255, 255, 255, 0.9);
            box-shadow: 0 0 20px rgba(0, 204, 204, 0.8); /* Neon glow effect on hover */
          }

          .tab-button::after {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            height: 100%;
            width: 100%;
            background: rgba(0, 204, 204, 0.5);
            transform: translateX(-50%) translateY(-100%);
            transition: transform 0.5s;
            border-radius: 12px;
            z-index: 0;
          }

          .tab-button:hover::after {
            transform: translateX(-50%) translateY(0);
            box-shadow: 0 0 30px rgba(0, 204, 204, 1); /* More pronounced neon shadow on hover */
          }

          .tab-button.active {
            box-shadow: 0 0 20px rgba(0, 204, 204, 1); /* Neon shadow for active tab */
          }
        `}
      </style>
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-100 my-20">
        What We&apos;ll Learn
      </h2>
      <div className="flex justify-center mb-6">
        <button
          className={`tab-button mx-2 transition duration-300 ease-in-out ${
            activeTab === 1 ? "active" : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
          Semester 1
        </button>
        <button
          className={`tab-button mx-2 transition duration-300 ease-in-out ${
            activeTab === 2 ? "active" : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          <FontAwesomeIcon icon={faBookReader} className="mr-2" />
          Semester 2
        </button>
        <button
          className={`tab-button mx-2 transition duration-300 ease-in-out ${
            activeTab === 3 ? "active" : ""
          }`}
          onClick={() => handleTabClick(3)}
        >
          <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
          Semester 3
        </button>
      </div>

      <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl perspective-1000">
        <motion.div {...tabAnimation} transition={{ duration: 0.5 }}>
          {activeTab === 1 && (
            <div>
              {/* content-1 */}
              <div className="tab-content card">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
                  Introduction to Programming in C Language
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Basic programming concepts",
                      "Variables",
                      "Operators",
                      "Loop (For, While), Nested Loop",
                      "Dynamic Array",
                      "Function, Pointer",
                    ])}
                  </ul>
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Input and Output Statements",
                      "Data types",
                      "Conditional Statements (if-else, nested if-else)",
                      "Array, Array Operations",
                      "String, String Operations",
                      "Recursion",
                    ])}
                  </ul>
                </div>
              </div>
              {/* content-2 */}
              <div className="tab-content card">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
                  Problem-solving Part - 01
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Basic Problem solving",
                      "Loop related problems",
                      "String related problems",
                      "Introduction to various Online judge",
                    ])}
                  </ul>
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Math related problems",
                      "Array related problems",
                      "Function related problems",
                    ])}
                  </ul>
                </div>
              </div>
              {/* content-3 */}
              <div className="tab-content card">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
                  Introduction to C++ For DSA
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Familiar with C++ syntax",
                      "Common Header file in C++",
                      "Dynamic Memory Allocation",
                      "Array of Classes",
                    ])}
                  </ul>
                  <ul className="list-none pl-0">
                    {renderItems([
                      "min(), max(), swap() function in C++",
                      "String Class in C++",
                      "Introduction to Class & Object",
                      "Array of Object",
                    ])}
                  </ul>
                </div>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              {/* card-1 */}
              <div className="tab-content card">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
                  Basic Data Structure
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Time Complexity & Space Complexity",
                      "Two pointers & Prefix Sum",
                      "Double Linked List",
                      "Queue",
                      "Binary Tree",
                      "STL",
                    ])}
                  </ul>
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Linear search, Binary search, Selection Sort",
                      "Singly Linked List",
                      "Stack",
                      "Priority Queue",
                      "BST & Heap",
                    ])}
                  </ul>
                </div>
              </div>
              {/* card-2 */}
              <div className="tab-content card">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
                  Problem-Solving Part - 02
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Problem-solving with Sorting",
                      "Problem-solving with Linked List",
                      "Queue Implementation",
                      "Practice with BST",
                    ])}
                  </ul>
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Problem-Solving with Two pointers & Prefix Sum",
                      "Stack Implementation",
                      "Problem-Solving using Binary Tree",
                      "Practice Problem Solving using Map and Priority Queue",
                    ])}
                  </ul>
                </div>
              </div>
              {/* card-3 */}
              <div className="tab-content card">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
                  Introduction to Algorithm
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Basics of Graph",
                      "Depth First Search (DFS) and 2D Grid",
                      "Bellman Ford Algorithm",
                      "Dynamic Programming",
                      "Unbounded Knapsack and Variations",
                      "Minimum Spanning Tree",
                    ])}
                  </ul>
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Breadth First Search (BFS)",
                      "Dijkstra Algorithm",
                      "Floyd Warshall Algorithm",
                      "0-1 Knapsack and Variations",
                      "LCS DP and variations",
                    ])}
                  </ul>
                </div>
              </div>
              {/* card-4 */}
              <div className="tab-content card">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
                  Problem-Solving Part - 03
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Problem-solving using BFS & DFS",
                      "Problem-solving using Bellman-Ford and Floyd Warshall",
                      "Problem-Solving using Variations & LCS",
                    ])}
                  </ul>
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Problem Solving using Graph Algorithms",
                      "Problem-Solving using 0-1 Knapsack & Unbound Knapsack",
                      "DSU and Cycle Detections",
                    ])}
                  </ul>
                </div>
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div>
              {/* card-1 */}
              <div className="tab-content card">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-2  pb-2">
                  Path 01: Become a Software Developer Course 01:
                  Object-Oriented
                </h3>
                <hr />
                <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
                  Programming With Python
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Basic Syntax & Data types",
                      "List and dictionary in python",
                      "Class & Object",
                      "Abstraction",
                      "Inheritance",
                      "Movie ticket booking system",
                    ])}
                  </ul>
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Control Flow & Loops",
                      "File handling",
                      "Encapsulation",
                      "Polymorphism",
                      "Library Management System",
                      "Parking lot Design",
                    ])}
                  </ul>
                </div>
              </div>
              {/* card-2 */}
              <div className="tab-content card">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
                  Course 02: DataBase
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Logical organization of databases",
                      "Network",
                      "Functional dependencies and normal forms",
                      "Database Administration",
                      "selection",
                      "Database integrity and security",
                      "different levels of indices",
                      "Indexing",
                      "Directory systems",
                    ])}
                  </ul>
                  <ul className="list-none pl-0">
                    {renderItems([
                      "the entity-relationship model",
                      "and relational data models",
                      "Query formulation and language",
                      "Methods used for the storage",
                      "and presentation of Data",
                      "concurrency control",
                      "Data organization",
                      "and hashing",
                      "Query Language: PostgreSQL or MySQL",
                    ])}
                  </ul>
                </div>
              </div>
              {/* card-3 */}
              <div className="tab-content card">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
                  Course 03: Software Development Project (Django)
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="list-none pl-0">
                    {renderItems([
                      "HTML & CSS",
                      "Introduction to Django",
                      "Working with forms in Django",
                      "Authentication Authorization from Django Admin Panel",
                    ])}
                  </ul>
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Familiar with JavaScript",
                      "Working with Django Template",
                      "Working with Models and ModelForm in Django",
                      "Working With Class Based View & Session Vs Cookie",
                    ])}
                  </ul>
                </div>
              </div>
              {/* card-4 */}
              <div className="tab-content card">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-2  pb-2">
                  Path 02: Become a Competitive Programmer
                </h3>
                <hr />
                <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
                  Target to Achieve 2 star, 3 Rating in CodeChef & Pupil Rank in
                  Codeforces
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Bit Manipulation",
                      "Sliding Window & Two Pointer Technique",
                      "Binary Search on Double, Lower Bound & Upper Bound",
                      "Minimum Spanning Tree (MST)",
                      "Math & Number Theory (Binary Exponentiation & Modular Arithmetic)",
                      "Segment Tree Lazy Propagation",
                      "Prefix Sum, 2D Prefix Sum & Difference Array",
                    ])}
                  </ul>
                  <ul className="list-none pl-0">
                    {renderItems([
                      "Bit Masking",
                      "Binary Search on Monotonic Functions, Binary Search on Answer",
                      "Disjoint Set Union (DSU)",
                      "Math & Number Theory (Sieve Algorithm, GCD, LCM)",
                      "Segment Tree",
                      "Policy Based Data Structure (PBDS)",
                      "Backtracking",
                    ])}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
      {/* thanks */}
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(33,135,105,1) 0%, rgba(6,48,69,1) 100%)",
        }}
        className="rounded-xl my-32 px-6 md:px-16 lg:px-32 py-20 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative"
      >
        <img
          src="https://i.imgur.com/COZltXP.png"
          alt=""
          className="absolute -top-16 -right-8 md:-right-8 lg:-right-16 w-28 md:w-28 lg:w-44 cursor-pointer animate-bounce" // Reduced size for mobile and laptop
        />
        <img
          src="https://i.imgur.com/wYM9Y8n.png"
          alt=""
          className="absolute top-12 -left-7 md:-left-10 lg:-left-24 w-20 md:w-28 lg:w-44 cursor-pointer animate-spin" // Reduced size for mobile and laptop
        />
        <div className="space-y-3 text-center md:text-left">
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(164,193,191,1) 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Expressions of Appreciation
          </h1>
          <p className="font-bold text-gray-300">
            In heartfelt appreciation, I extend special thanks for your
            exceptional support.
          </p>
        </div>
        <div className="flex justify-center md:justify-start mt-6 md:mt-0">
          <button onClick={handleOpen} className="relative">
            <img
              className="w-60 md:w-80"
              src="https://i.imgur.com/f3z35qo.png"
              alt=""
            />
            <h1 className="absolute text-lg font-bold text-gray-300 top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 md:left-28 lg:left-24">
              Revel
            </h1>
          </button>
          <Dialog
            className="bg-[linear-gradient(90deg, rgba(40,7,66,1) 0%, rgba(13,5,24,1) 15%, rgba(22,6,38,1) 85%, rgba(40,7,66,1) 100%)]"
            open={open}
            handler={handleOpen}
          >
            <DialogHeader
              style={{
                background:
                  "linear-gradient(90deg, rgba(33,135,105,1) 0%, rgba(6,48,69,1) 100%)",
              }}
            >
              <Typography
                variant="h5"
                className="text-gray-300 font-extrabold uppercase ml-4 md:ml-36 rounded-lg p-2"
              >
                Celebrating Your Mission Success
              </Typography>
            </DialogHeader>
            <DialogBody divider className="grid place-items-center gap-4">
              <Lottie animationData={cat}></Lottie>
              <Typography
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(33,135,105,1) 0%, rgba(6,48,69,1) 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                variant="h4"
              >
                Crafting Beauty, Inspiring Thanks!
              </Typography>
              <Typography className="text-center font-normal text-gray-400 px-4 md:px-0">
                &quot;Heartfelt gratitude for your unwavering support and
                exceptional team collaboration throughout our mission. Your
                leadership has been a guiding light, inspiring creativity and
                fostering a spirit of unity among us all. Thank you for your
                dedication and commitment,{" "}
                <span className="text-orange-400 text-xl">Squad Leader</span>.
                Wishing you continued success in your career as you embark on
                new adventures and create even more remarkable
                achievements.&quot;
              </Typography>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button className="bg-transparent" onClick={handleOpen}>
                <Lottie className="w-28" animationData={love}></Lottie>
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Art;
