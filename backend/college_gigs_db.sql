-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2023 at 02:50 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `college_gigs_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `c_gigs_s_up_employer`
--

CREATE TABLE `c_gigs_s_up_employer` (
  `emp_id` int(11) NOT NULL,
  `emp_name` varchar(255) NOT NULL,
  `emp_email` varchar(255) NOT NULL,
  `emp_pass` varchar(255) NOT NULL,
  `emp_comp` varchar(255) NOT NULL,
  `emp_fb` varchar(255) NOT NULL,
  `emp_insta` varchar(255) NOT NULL,
  `emp_linkedin` varchar(255) NOT NULL,
  `emp_page` varchar(255) NOT NULL,
  `emp_pfp` varchar(255) NOT NULL,
  `emp_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `c_gigs_s_up_employer`
--

INSERT INTO `c_gigs_s_up_employer` (`emp_id`, `emp_name`, `emp_email`, `emp_pass`, `emp_comp`, `emp_fb`, `emp_insta`, `emp_linkedin`, `emp_page`, `emp_pfp`, `emp_address`) VALUES
(1, 'Mark Allen Jugalbot', 'markosallenus@gmail.com', '123456', 'College Gigs Inc.', 'https://www.facebook.com/MarK.of.Marks', 'https://www.facebook.com/MarK.of.Marks', 'https://www.facebook.com/MarK.of.Marks', 'https://www.facebook.com/MarK.of.Marks', '../C_Gigs_Photos/F_Lancer_Pfp/646c7975e02f4_MJugalbot.jpg', 'Cebu, Philippines'),
(2, 'John Lorenz Martin', 'martin@gmail.com', '123456', 'College Gigs Inc.', 'https://www.facebook.com/johnlorenz.martin.1', 'https://www.facebook.com/johnlorenz.martin.1', 'https://www.facebook.com/johnlorenz.martin.1', 'https://www.facebook.com/johnlorenz.martin.1', '../C_Gigs_Photos/F_Lancer_Pfp/646c76569578e_Martin.jpg', 'Cebu, Philippines'),
(3, 'Ryan Krisztonn Yana', 'ryan@gmail.com', '123456', 'College Gigs Inc.', 'https://www.facebook.com/RyanKrisztonn.Yana', 'https://www.facebook.com/RyanKrisztonn.Yana', 'https://www.facebook.com/RyanKrisztonn.Yana', 'https://www.facebook.com/RyanKrisztonn.Yana', '../C_Gigs_Photos/F_Lancer_Pfp/646c78e6661a5_RyanY.jpg', 'Cebu, Philippines'),
(4, 'Jab Abadia', 'jab@gmail.com', '123456', 'College Gigs Inc.', 'https://www.facebook.com/Jabalazer.Abadia', 'https://www.facebook.com/Jabalazer.Abadia', 'https://www.facebook.com/Jabalazer.Abadia', 'https://www.facebook.com/Jabalazer.Abadia', '../C_Gigs_Photos/F_Lancer_Pfp/646c79025272a_Jab.jpg', 'Cebu, Philippines'),
(5, 'Martin Meont', 'guest@gmail.com', '123456', 'Starries', 'https://www.facebook.com/', 'https://www.instagram.com/', 'https://www.linkedin.com/login', '', '../C_Gigs_Photos/F_Lancer_Pfp/646e040a89d88_image.jpg', 'Cebu, Philippines'),
(6, 'Jake', 'jake@gmail.com', '123', 'DUDES', 'facebook', 'instagram', 'linkedin', 'address', '', 'address'),
(7, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asdf', 'asd'),
(8, 'adrianss', 'asddd', '$2a$10$rWAFAeJpRJkkqIYDrX3ExOpn5xV0qC1Nt0cOXXQRBTAgaCS81scDG', 'asdasda', '', '', '', '', '', ''),
(12, 'adrian', 'adrian2@gmail.com', '$2a$10$Z73dZVG8NXDBBGR9PFTGPOD7mGcf59YZD9jmeSQVx0X/rpM5KFcVG', 'asd', 'asd', 'asd', 'asd', 'asd', 'uploads\\employer\\emp_pfp-1701924936871.jpg', 'asd');

-- --------------------------------------------------------

--
-- Table structure for table `c_gigs_s_up_flancer`
--

CREATE TABLE `c_gigs_s_up_flancer` (
  `f_id` int(11) NOT NULL,
  `f_name` varchar(255) NOT NULL,
  `f_age` int(11) NOT NULL,
  `f_email` varchar(255) NOT NULL,
  `f_password` varchar(255) NOT NULL,
  `f_school` varchar(255) NOT NULL,
  `f_level` varchar(255) NOT NULL,
  `f_course` varchar(255) NOT NULL,
  `f_portfolio` varchar(255) NOT NULL,
  `f_fb` varchar(255) NOT NULL,
  `f_insta` varchar(255) NOT NULL,
  `f_linkedin` varchar(255) NOT NULL,
  `f_twitter` varchar(255) NOT NULL,
  `f_pfp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `c_gigs_s_up_flancer`
--

INSERT INTO `c_gigs_s_up_flancer` (`f_id`, `f_name`, `f_age`, `f_email`, `f_password`, `f_school`, `f_level`, `f_course`, `f_portfolio`, `f_fb`, `f_insta`, `f_linkedin`, `f_twitter`, `f_pfp`) VALUES
(1, 'Martin Meont', 15, 'guest@gmail.com', '$2a$10$a0SBRYy8jVhtVBkHnB.wwekrYv0LWUvOA9NuOiQsk6PsdJzhW25be', 'University of Cebu: Banilad', 'First Year', 'BS Psycho', 'https://www.journoportfolio.com/', 'https://www.facebook.com/', 'https://www.instagram.com/', 'https://www.linkedin.com/login', 'https://twitter.com', '../C_Gigs_Photos/F_Lancer_Pfp/646df17f135f0_image.jpg'),
(2, '', 0, 'martingarrix@gmail.com', '$2a$10$a0SBRYy8jVhtVBkHnB.wwekrYv0LWUvOA9NuOiQsk6PsdJzhW25be', '', '', '', '', '', '', '', '', '../C_Gigs_Photos/F_Lancer_Pfp/646df6fa6b7a6_EthanMygUy.webp'),
(3, 'Carla Mae Jugalbot', 24, 'carla@gmail.com', '123456', 'University of Cebu: Banilad', 'Third Year', 'BS CS', 'https://www.journoportfolio.com/', 'https://www.facebook.com/', 'https://www.instagram.com/', 'https://www.linkedin.com/login', 'https://twitter.com', '../C_Gigs_Photos/F_Lancer_Pfp/646df80345713_Chad.jpg'),
(4, 'Ethan Montera', 21, 'ethanmont@gmail.com', '123456', 'University of San Carlos: Talamban Campus', 'Second Year', 'BS IT', 'https://www.journoportfolio.com/', 'https://www.facebook.com/', 'https://www.instagram.com/', 'https://www.linkedin.com/login', 'h', ''),
(5, 'Zenno Abellana', 23, 'zenn0@gmail.com', '123456', 'University of San Carlos: Talamban Campus', 'First Year', 'BS CS', 'https://www.journoportfolio.com/', 'https://www.facebook.com/', 'https://www.instagram.com/', 'https://www.linkedin.com/login', '', '../C_Gigs_Photos/F_Lancer_Pfp/646df97e82976_Martin.jpg'),
(6, 'asd', 0, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', '', ''),
(7, 'asd', 0, 'asdd', '$2a$10$XcIIvRj8/RgizTm4u7Gbg.GILXYuJYzXQ3AVbQyv0xAa4DQDSREoa', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', '', ''),
(8, 'jamesversion2', 1, 'asdd@gmail.com', '$2a$10$XLQB7iMSs/DOItSLTyzm2.d.wAxetTLoLdoOvb6DNu.tTcH4aWzXa', '1', '1', '1', '1', '1', '1', '1', '1', ''),
(9, 'jamesversion2', 1, 'adrian2@gmail.com', '$2a$10$j/GkEPxy27pKgVmyZWM5OOlDhm8ymZPZpA3wBPtg58e8nkuhjFyXS', '1', '1', '1', '1', '1', '1', '1', '1', ''),
(12, 'adrian', 1, 'adrian@gmail.com', '$2a$10$a0SBRYy8jVhtVBkHnB.wwekrYv0LWUvOA9NuOiQsk6PsdJzhW25be', 'cit', '2', 'cs', 'asds', 'asd', 'asd', 'asd', 'asd', 'uploads\\freelancer\\f_pfp-1701926338552.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `c_gigs_works`
--

CREATE TABLE `c_gigs_works` (
  `w_id` int(11) NOT NULL,
  `f_id` int(11) NOT NULL,
  `f_name` varchar(255) NOT NULL,
  `f_email` varchar(255) NOT NULL,
  `f_work` varchar(255) NOT NULL,
  `f_time` varchar(255) NOT NULL,
  `f_sdate` varchar(255) NOT NULL,
  `f_edate` varchar(255) NOT NULL,
  `f_description` varchar(255) NOT NULL,
  `f_price` varchar(255) NOT NULL,
  `f_cname` varchar(255) NOT NULL,
  `f_card` varchar(255) NOT NULL,
  `f_expmonth` varchar(255) NOT NULL,
  `f_expyear` varchar(255) NOT NULL,
  `f_cvv` varchar(255) NOT NULL,
  `emp_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `c_gigs_works`
--

INSERT INTO `c_gigs_works` (`w_id`, `f_id`, `f_name`, `f_email`, `f_work`, `f_time`, `f_sdate`, `f_edate`, `f_description`, `f_price`, `f_cname`, `f_card`, `f_expmonth`, `f_expyear`, `f_cvv`, `emp_id`) VALUES
(4, 2, 'Martin', 'martingarrix@gmail.com', 'Programming', 'Evening(6:00 P.M. - 12:00 A.M. PHT)', 'Monday', 'Thursday', 'Easy', ' $41.00 - $80.00 ', 'Martin Lorenz', '1111-3333-4444-2222', 'December', '2025', '2166', 12),
(6, 2, 'Martin', 'martingarrix@gmail.com', 'Graphic Design', 'Early Morning(1:00 A.M. - 6:00 A.M. PHT)', 'Thursday', 'Saturday', 'Yes', ' $41.00 - $80.00 ', 'Martin Lorenz', '2222-3333-1111-5555', 'October', '2029', '2261', 6),
(7, 3, 'Carla Mae Jugalbot', 'carla@gmail.com', 'Graphic Design', 'Early Morning(1:00 A.M. - 6:00 A.M. PHT)', 'Friday', 'Saturday', 'EZ', ' $41.00 - $80.00 ', 'Carla Mae Jugalbot', '2222-1111-4444-9999', 'September', '2027', '3664', 2),
(8, 3, 'Carla Mae Jugalbot', 'carla@gmail.com', 'Programming', 'Morning(6:00 A.M. - 12:00 P.M. PHT)', 'Monday', 'Sunday', 'Helper', ' $41.00 - $80.00 ', 'Carla Mae Jugalbot', '2222-3333-1141-5561', 'March', '2029', '9721', 0),
(9, 4, 'Ethan Montera', 'ethanmont@gmail.com', 'Proofreading and Writing', 'Morning(6:00 A.M. - 12:00 P.M. PHT)', 'Monday', 'Wednesday', 'Fast Easy', ' To Be Discussed ', 'Ethan Montera', '2222-3333-1111-6666', 'June', '2027', '9621', 0),
(10, 4, 'Ethan Montera', 'ethanmont@gmail.com', 'Others', 'Evening(6:00 P.M. - 12:00 A.M. PHT)', 'Monday', 'Saturday', 'Fast and Efficient', ' $81.00 - $100.00 ', 'Ethan Montera', '3333-6661-2225-4545', 'December', '2028', '6553', 0),
(11, 5, 'Zenno Abellana', 'zenn0@gmail.com', 'Proofreading and Writing', 'Afternoon(12:00 P.M. - 6:00 P.M. PHT)', 'Monday', 'Thursday', 'Fast', ' $21.00 - $40.00 ', 'Zenno G. Abellana', '2332-4411-5512-7712', 'August', '2026', '6488', 0),
(12, 5, 'Zenno Abellana', 'zenn0@gmail.com', 'Others', 'Evening(6:00 P.M. - 12:00 A.M. PHT)', 'Thursday', 'Saturday', 'Helper for people in need', ' $5.00 - $20.00 ', 'Zenno G. Abellana', '1111-6969-4206-9420', 'October', '2025', '6969', 0);

-- --------------------------------------------------------

--
-- Table structure for table `token_blacklist`
--

CREATE TABLE `token_blacklist` (
  `token` varchar(1024) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `token_blacklist`
--

INSERT INTO `token_blacklist` (`token`, `id`) VALUES
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llciI6eyJlbXBfaWQiOjksImVtcF9uYW1lIjoiYWRyaWFuMTIzIiwiZW1wX2VtYWlsIjoiYWRyaWFuQGdtYWlsLmNvbSIsImVtcF9wYXNzIjoiJDJhJDEwJFdkVzNXOU5paWpCWVREZlNDLnZPVHUvb3N0SUJRWlV2Z2o1NVFpRGlPZ2NsQWkzYWF5RUUuIiwiZW1wX2NvbXAiOiIiLCJlbXBfZmIiOiIiLCJlbXBfaW5zdGEiOiIiLCJlbXBfbGlua2VkaW4iOiIiLCJlbXBfcGFnZSI6IiIsImVtcF9wZnAiOiIiLCJlbXBfYWRkcmVzcyI6IiJ9LCJpYXQiOjE3MDE4ODQ4OTAsImV4cCI6MTcwNDQ3Njg5MH0.KWSVUX3X9wZU7fCvkUQL6bHPPV7L-FYEJ_iy-kIjF0Y', 11),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llciI6eyJlbXBfaWQiOjksImVtcF9uYW1lIjoiYWRyaWFuMTIzIiwiZW1wX2VtYWlsIjoiYWRyaWFuQGdtYWlsLmNvbSIsImVtcF9wYXNzIjoiJDJhJDEwJFdkVzNXOU5paWpCWVREZlNDLnZPVHUvb3N0SUJRWlV2Z2o1NVFpRGlPZ2NsQWkzYWF5RUUuIiwiZW1wX2NvbXAiOiIiLCJlbXBfZmIiOiIiLCJlbXBfaW5zdGEiOiIiLCJlbXBfbGlua2VkaW4iOiIiLCJlbXBfcGFnZSI6IiIsImVtcF9wZnAiOiIiLCJlbXBfYWRkcmVzcyI6IiJ9LCJpYXQiOjE3MDE4ODUyMDgsImV4cCI6MTcwNDQ3NzIwOH0.valY-oHb2jiUwlBDrYnKtwsVjUIHRCe1mQLxds4c7Fo', 12),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVlbGFuY2VyIjp7ImZfaWQiOjksImZfbmFtZSI6ImFzZCIsImZfYWdlIjowLCJmX2VtYWlsIjoiYWRyaWFuMkBnbWFpbC5jb20iLCJmX3Bhc3N3b3JkIjoiJDJhJDEwJGovR2tFUHh5MjdwS2dWbXlaV001T09sRGhtOHltWlBacEEzd0JQdGc1OGU4bmt1aGpGeVhTIiwiZl9zY2hvb2wiOiJhc2QiLCJmX2xldmVsIjoiYXNkIiwiZl9jb3Vyc2UiOiJhc2QiLCJmX3BvcnRmb2xpbyI6ImFzZCIsImZfZmIiOiJhc2QiLCJmX2luc3RhIjoiYXNkIiwiZl9saW5rZWRpbiI6ImFzZCIsImZfdHdpdHRlciI6IiIsImZfcGZwIjoiIn0sImlhdCI6MTcwMTg4NTI0MiwiZXhwIjoxNzA0NDc3MjQyfQ.ACERKaQf54iO-MAfK7k6BYWHr0K9qOs0KDCrvw2OSoY', 13);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `c_gigs_s_up_employer`
--
ALTER TABLE `c_gigs_s_up_employer`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `c_gigs_s_up_flancer`
--
ALTER TABLE `c_gigs_s_up_flancer`
  ADD PRIMARY KEY (`f_id`);

--
-- Indexes for table `c_gigs_works`
--
ALTER TABLE `c_gigs_works`
  ADD PRIMARY KEY (`w_id`);

--
-- Indexes for table `token_blacklist`
--
ALTER TABLE `token_blacklist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `c_gigs_s_up_employer`
--
ALTER TABLE `c_gigs_s_up_employer`
  MODIFY `emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `c_gigs_s_up_flancer`
--
ALTER TABLE `c_gigs_s_up_flancer`
  MODIFY `f_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `c_gigs_works`
--
ALTER TABLE `c_gigs_works`
  MODIFY `w_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `token_blacklist`
--
ALTER TABLE `token_blacklist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
