const quizData = [
    {
        "q": "Theo Quy trình An toàn, công việc làm ở thiết bị đang mang điện, có sử dụng các trang bị, dụng cụ chuyên dùng là?",
        "a": "A. Làm việc có điện.",
        "b": "B. Làm việc có cắt điện một phần.",
        "c": "C. Làm việc có cắt điện hoàn toàn",
        "d": "D. Tất cả các đáp án trên (dưới)",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, các công việc khi tiến hành trên đường dây, thiết bị điện, ở gần hoặc liên quan đến đường dây, thiết bị điện đang mang điện, bao gồm cả vùng ảnh hưởng nguy hiểm bởi cảm ứng điện, đều phải thực hiện theo?",
        "a": "A. Thực hiện theo phiếu công tác hoặc lệnh công tác",
        "b": "B. Thực hiện theo phiếu công tác",
        "c": "C. Thực hiện theo lệnh công tác",
        "d": "D. Thực hiện theo phiếu thao tác và lệnh công tác",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, nội dung nào dưới đây là quy định đúng và được áp dụng để thực hiện nối đất tạo vùng an toàn khi làm việc?",
        "a": "A. ĐVCT chịu trách nhiệm thực hiện nối đất di động tại nơi làm việc sao cho ĐVCT nằm trọn trong vùng bảo vệ của nối đất.",
        "b": "B. Đơn vị QLVH chịu trách nhiệm thực hiện nối đất di động tại nơi làm việc sao cho ĐVCT nằm trọn trong vùng bảo vệ của nối đất.",
        "c": "C. Đơn vị phối hợp cho phép chịu trách nhiệm thực hiện nối đất di động tại nơi làm việc sao cho ĐVCT nằm trọn trong vùng bảo vệ của nối đất.",
        "d": "D. Đơn vị làm công việc chịu trách nhiệm thực hiện nối đất di động tại nơi làm việc sao cho ĐV QLVH nằm trọn trong vùng bảo vệ của nối đất.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, an toàn thao tác tại chỗ thiết bị điện nào dưới đây là đúng quy định?",
        "a": "A. Tất cả các 3 đáp án trên (dưới)",
        "b": "B. Không cho phép thao tác đóng cắt ngoài trời trong điều kiện thời tiết xấu (ngoài trời có mưa tạo thành dòng chảy trên thiết bị điện, giông sét, ngập lụt, gió từ cấp 06 trở lên)",
        "c": "C. Thao tác tại chỗ, kéo ra/đưa vào vị trí vận hành thiết bị đóng cắt cao áp phải mang găng tay cách điện áp cao và đi ủng cách điện áp cao hoặc mang găng tay cách điện áp cao và đứng trên ghế/thảm cách điện phù hợp với cấp điện áp",
        "d": "D. Trước khi thao tác tại chỗ thiết bị đóng cắt cao áp phải kiểm tra máy cắt, aptomat liên quan đang ở vị trí mở.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, những biện pháp kỹ thuật chuẩn bị nơi làm việc phải cắt điện bao gồm?",
        "a": "A. (i) Cắt điện và thực hiện các biện pháp ngăn chặn có điện trở lại nơi làm việc; (ii) Kiểm tra không còn điện; (iii) Đặt nối đất (tiếp đất hoặc tiếp địa); (iv) Treo biển báo, tín hiệu. Đặt rào chắn, căng dây (nếu cần thiết).",
        "b": "B. (i) Cắt điện; (ii) Kiểm tra không còn điện; (iii) Đặt tiếp đất; (iv) Đặt rào chắn; treo biển báo, tín hiệu",
        "c": "C. (i) Cắt điện và ngăn chặn có điện trở lại nơi làm việc; (ii) Đặt rào chắn; treo biển báo, tín hiệu; (iii) Kiểm tra không còn điện; (iv) Đặt tiếp đất.",
        "d": "D. (i) Cắt điện và ngăn chặn có điện trở lại nơi làm việc; (ii) Kiểm tra không còn điện; (iii) Đặt tiếp đất; (iv) Đặt rào chắn; treo biển báo, tín hiệu; Nếu cắt điện hoàn toàn thì không phải làm rào chắn.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, thực hiện biện pháp kỹ thuật chuẩn bị nơi làm việc phải cắt điện, trình tự nào sau đây đúng: 1.Cắt điện và thực hiện các biện pháp ngăn chặn có điện trở lại nơi làm việc; 2.Cắt điện; 3.Kiểm tra không còn điện; 4.Đặt nối đất (tiếp đất hoặc tiếp địa); 5.Treo biển báo, tín hiệu. Đặt rào chắn, căng dây (nếu cần thiết)?",
        "a": "A. 1-3-4-5",
        "b": "B. 2-3-4-5",
        "c": "C. 2-5-3-4",
        "d": "D. 1-5-3-4",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, cắt điện để làm công việc phải thực hiện theo những nội dung nào sau đây?",
        "a": "A. Phải nhìn thấy được khoảng hở của thiết bị đóng cắt, trừ trường hợp quy định tại điểm b khoản 1, điều 20 quy trình này; hoặc tạo khoảng hở như: kéo máy cắt hợp bộ ra vị trí thí nghiệm/sửa chữa; tháo cầu chì; tháo đầu cáp; tháo lèo dây dẫn.",
        "b": "B. Đối với các thiết bị đóng cắt kiểu kín (không nhìn được khoảng hở) cấm căn cứ hiển thị về cơ khí trạng thái tại chỗ của thiết bị đóng cắt và thông số điện áp (nếu có) để xác định thiết bị đã được cắt điện.",
        "c": "C. Phải treo biển “Cấm đóng điện! Có người đang làm việc” tại chỗ thiết bị đóng cắt, phải cử Người GSATĐ nếu không thực hiện được biện pháp khóa thiết bị đóng cắt.",
        "d": "D. Cắt điện do Nhân viên vận hành đảm nhiệm. Có thể uỷ nhiệm việc thao tác cắt điện cho người CHTT của Đơn vị công tác nếu người này đã được huấn luyện, sát hạch đạt yêu cầu.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, cắt điện để làm công việc phải thực hiện theo những nội dung nào sau đây?",
        "a": "A. Đối với các thiết bị đóng cắt kiểu kín (không nhìn được khoảng hở) thì phải căn cứ hiển thị về cơ khí trạng thái tại chỗ của thiết bị đóng cắt và thông số điện áp (nếu có).",
        "b": "B. Đối với các thiết bị đóng cắt nhìn được khoảng hở, cấm căn cứ hiển thị về cơ khí trạng thái tại chỗ của thiết bị đóng cắt và thông số điện áp (nếu có) để xác định thiết bị đã được cắt điện.",
        "c": "C. Phải treo biển “Cấm đóng điện! Có người đang làm việc” tại chỗ thiết bị đóng cắt, phải cử Người GSATĐ nếu không thực hiện được biện pháp khóa thiết bị đóng cắt.",
        "d": "D. Tất cả các đáp án trên (dưới)",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, cắt điện để làm công việc phải thực hiện theo những nội dung nào sau đây?",
        "a": "A. Việc thao tác thiết bị do nhân viên vận hành đương ca đảm nhiệm. Chỉ Nhân viên vận hành mới được gỡ bỏ các biện pháp an toàn này sau khi đã kết thúc công tác.",
        "b": "B. Có thể uỷ nhiệm việc thao tác cắt điện cho người CHTT của Đơn vị công tác nếu người này đã được huấn luyện, sát hạch đạt yêu cầu.",
        "c": "C. Cắt điện từng phần để làm việc phải giao cho Trưởng kíp điều khiển nắm vững sơ đồ và vị trí thực tế của thiết bị điện để ngăn ngừa khả năng nhầm lẫn, gây nguy hiểm cho Đơn vị công tác.",
        "d": "D. Người GSATĐ (nếu có cử) phải tiến hành kiểm tra xác định không còn điện ở các thiết bị điện, ĐD đã cắt điện.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, yêu cầu khi cách ly thiết bị để làm công việc sửa chữa phải thực hiện theo những nội dung nào sau đây?",
        "a": "A. Cách ly thiết bị từng phần thuộc hệ thống để làm việc phải giao cho Nhân viên vận hành nắm vững sơ đồ và vị trí thực tế của thiết bị để ngăn ngừa khả năng nhầm lẫn, gây nguy hiểm cho Đơn vị công tác.",
        "b": "B. Có thể uỷ nhiệm việc thao tác cắt, đóng cho người CHTT của đơn vị công tác.",
        "c": "C. Cắt điện từng phần để làm việc phải giao cho Trưởng kíp điều khiển xa nắm vững sơ đồ và vị trí thực tế của thiết bị điện để ngăn ngừa khả năng nhầm lẫn, gây nguy hiểm cho Đơn vị công tác.",
        "d": "D. Tất cả 3 đáp án trên (dưới)",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, nội dung nào sau đây là quy định đúng để thực hiện kiểm tra xác định không còn điện?",
        "a": "A. Kiểm tra không còn điện bằng thiết bị thử điện chuyên dùng phù hợp với điện áp danh định của thiết bị cần thử như bút thử điện, còi thử điện; phải thử ở tất cả các pha và các phía của thiết bị điện.",
        "b": "B. Đối với thiết bị điện tại nhà máy điện, trạm điện, GIS, tủ hợp bộ hoặc thiết bị kiểu kín: Cấm kiểm tra không còn điện thông qua chỉ thị tại chỗ thiết bị đóng cắt (3 pha, tất cả các phía) và thông số điện áp (nếu có).",
        "c": "C. Phải kiểm tra thiết bị thử điện ở nơi có điện trước, nếu ở nơi làm việc không có điện để thử thì cho phép sử dụng thiết bị thử ít nhất 2 lần, mỗi lần cách nhau 5 phút để kiểm tra xác định không còn điện tại nơi đã cắt diện.",
        "d": "D. Người CHTT phải tiến hành kiểm tra xác định không còn điện ở các thiết bị điện, ĐD đã cắt điện được người Cho phép bàn giao.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, nội dung nào sau đây là quy định đúng để thực hiện kiểm tra xác định không còn điện?",
        "a": "A. Không được căn cứ tín hiệu đèn, rơ le, đồng hồ để xác nhận thiết bị điện không còn điện, nhưng nếu đèn, rơ le, đồng hồ báo tín hiệu có điện thì phải xem như thiết bị điện vẫn có điện.",
        "b": "B. Đối với thiết bị điện tại nhà máy điện, trạm điện, GIS, tủ hợp bộ hoặc thiết bị kiểu kín: Cấm kiểm tra không còn điện thông qua chỉ thị tại chỗ thiết bị đóng cắt (3 pha, tất cả các phía) và thông số điện áp (nếu có).",
        "c": "C. Phải kiểm tra thiết bị thử điện ở nơi có điện trước, nếu ở nơi làm việc không có điện để thử thì cho phép sử dụng thiết bị thử ít nhất 2 lần, mỗi lần cách nhau 5 phút để kiểm tra xác định không còn điện tại nơi đã cắt diện.",
        "d": "D. Tất cả 3 đáp án trên (dưới)",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, nội dung nào sau đây là quy định đúng để thực hiện kiểm tra xác định không còn điện?",
        "a": "A. Tất cả 3 đáp án trên (dưới)",
        "b": "B. Nhân viên vận hành phải tiến hành kiểm tra xác định không còn điện ở các thiết bị điện, đường dây đã cắt điện.",
        "c": "C. Kiểm tra không còn điện bằng thiết bị thử điện chuyên dùng phù hợp với điện áp danh định của thiết bị cần thử như bút thử điện, còi thử điện; phải thử ở tất cả các pha và các phía của thiết bị điện",
        "d": "D. Không được căn cứ tín hiệu đèn, rơ le, đồng hồ để xác nhận thiết bị điện không còn điện, nhưng nếu đèn, rơ le, đồng hồ báo tín hiệu có điện thì phải xem như thiết bị điện vẫn có điện.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, nội dung nào sau đây là quy định đúng để thực hiện kiểm tra xác định không còn điện?",
        "a": "A. Nội dung (1) và (2).",
        "b": "B. (1). Nhân viên vận hành phải tiến hành kiểm tra xác định không còn điện ở các thiết bị điện, ĐD đã cắt điện.",
        "c": "C. (2). Phải thử ở tất cả các pha và các phía của thiết bị điện.",
        "d": "D. (3). Phải kiểm tra thiết bị thử ở nơi có điện trước, sau đó mới thử ở nơi không còn điện. Nếu ở nơi làm việc không có điện để thử thì cho phép chỉ cần kiểm tra- thử thử bằng chính tín hiệu đèn, còi… của thiết bị đó",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, phải thực hiện nối đất tại nơi làm việc có cắt điện theo nội dung nào dưới đây?",
        "a": "A. Phải nối đất (cố định, di động) ngay sau khi kiểm tra không còn điện.",
        "b": "B. Thử hết điện xong tất cả các pha rồi mới thực hiện nối đất.",
        "c": "C. Tiếp đất ở tất cả các pha, tất cả các đầu vào và ra của thiết bị.",
        "d": "D. Đảm bảo khoảng cách an toàn đối với phần còn mang điện ít nhất 2m đến điện áp 35kV, 3m đến điện áp 110kV, 4m đến điện áp 220kV, 5m đến điện áp 500kV.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, phải thực hiện nối đất tại nơi làm việc có cắt điện theo nội dung nào dưới đây?",
        "a": "A. Nối đất ở tất cả các pha của thiết bị điện, phụ tải hoặc các nguồn điện khác về phía có khả năng dẫn điện đến.",
        "b": "B. Thử hết điện ngay sau khi tiếp đất",
        "c": "C. Đảm bảo khoảng cách an toàn đối với phần không mang điện.",
        "d": "D. Đảm bảo cho toàn bộ Nhân viên ĐVCT nằm trọn trong vùng bảo vệ kép.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, nội dung nào dưới đây là quy định đúng và được áp dụng để thực hiện nối đất tại nơi làm việc có cắt điện?",
        "a": "A. (3). Đảm bảo cho toàn bộ Nhân viên đơn vị công tác nằm trọn trong vùng bảo vệ của nối đất.",
        "b": "B. (1). Tiếp đất ở tất cả các pha, tất cả các đầu vào và ra của thiết bị.",
        "c": "C. (2). Đảm bảo khoảng cách an toàn đối với phần còn mang điện ít nhất 2m đến điện áp 35kV, 3m đến điện áp 110kV, 4m đến điện áp 220kV, 5m đến điện áp 500kV.",
        "d": "D. Nội dung (1) và (2).",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, nội dung nào dưới đây là quy định đúng và được áp dụng để thực hiện nối đất tạo vùng an toàn khi làm việc?",
        "a": "A. Đơn vị QLVH tổ chức thực hiện nối đất tại tất cả các đầu có nguồn điện đến để tạo vùng làm việc an toàn trước khi bàn giao hiện trường.",
        "b": "B. Đơn vị công tác tổ chức thực hiện nối đất tại tất cả các đầu có nguồn điện đến để tạo vùng làm việc an toàn trước khi bàn giao hiện trường.",
        "c": "C. Đơn vị làm công việc tổ chức thực hiện nối đất tại tất cả các đầu có nguồn điện đến để tạo vùng làm việc an toàn trước khi bàn giao hiện trường.",
        "d": "D. Đơn vị điều độ giữ quyền điều khiển tổ chức thực hiện nối đất tại tất cả các đầu có nguồn điện đến để tạo vùng làm việc an toàn trước khi bàn giao hiện trường.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, người Chỉ huy trực tiếp có trách nhiệm?",
        "a": "A. Phải hợp tác chặt chẽ với Người cấp phiếu, Người cho phép, chịu sự chỉ huy về an toàn của Người lãnh đạo công việc (nếu có).",
        "b": "B. Phối hợp với Người phối hợp cho phép để đảm bảo công tác an toàn và gìn giữ an toàn cho Nhân viên đơn vị công tác",
        "c": "C. Đặt, di chuyển, tháo dỡ các biển báo ATĐ, rào chắn, nối đất di động do Đơn vị công tác thực hiện trong khi làm việc.",
        "d": "D. Có mặt liên tục tại nơi làm việc để làm nhiệm vụ giám sát ATĐ (cho đến khi hoàn thành phần nhiệm vụ được phân công) và không làm bất cứ việc gì khác ngoài nhiệm vụ giám sát ATĐ.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, thao tác đóng điện vào thiết bị điện đã cắt điện khi làm việc được thực hiện theo điều kiện nào dưới đây?",
        "a": "A. Đã khóa PCT, nếu thiết bị đóng điện có liên quan đến nhiều Đơn vị công tác thì phải khóa tất cả các PCT, đảm bảo thiết bị sẽ đóng điện tuyệt đối an toàn.",
        "b": "B. Tại nơi trực vận hành của đơn vị quản lý vận hành vẫn duy trì các dấu hiệu báo có đơn vị công tác làm việc trên sơ đồ",
        "c": "C. Nơi (thiết bị) làm việc đã cất biển báo và rào chắn tạm thời khi làm việc (nếu có), chưa đặt lại rào chắn cố định",
        "d": "D. Được phép đóng điện của cấp điều độ có quyền kiểm tra thiết bị theo quy định.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, nội dung nào là quy định không đúng khi thao tác đóng điện vào thiết bị điện đã cắt điện để làm việc?",
        "a": "A. Được phép đóng điện của đơn vị có quyền kiểm tra quy định tại Thông tư quy định quy trình điều độ hệ thống điện quốc gia do Bộ Công Thương ban hành.",
        "b": "B. Đã khóa PCT, nếu thiết bị đóng điện có liên quan đến nhiều Đơn vị công tác thì phải khóa tất cả các PCT, đảm bảo thiết bị sẽ đóng điện tuyệt đối an toàn.",
        "c": "C. Nơi làm việc đã tháo biển báo và rào chắn tạm thời khi làm việc (nếu có), đặt lại rào chắn cố định.",
        "d": "D. Tại nơi trực vận hành của Đơn vị QLVH đã tháo hết các dấu hiệu báo có Đơn vị công tác làm việc trên sơ đồ.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, biện pháp an toàn khi làm việc ở động cơ điện cao áp, quy định nào sau đây đúng?",
        "a": "A. Cấm làm bất cứ công việc gì trong mạch của động cơ đang quay, trừ công việc thí nghiệm thực hiện theo phương án được phê duyệt.",
        "b": "B. Cấm thực hiện công việc theo mệnh lệnh trên động cơ điện đang quay mà không tiếp xúc với các phần mang điện và quay.",
        "c": "C. Khi động cơ điện đang làm việc, không cho phép bảo dưỡng chổi than bởi nhân viên được đào tạo cho nhiệm vụ này.",
        "d": "D. Trước khi cho phép làm việc trên động cơ điện quay phải mở khóa các cơ cấu nối với máy hút khói, quạt, máy bơm, tay lái của van chặn, chốt, cánh quạt, tấm chắn.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình an toàn, khi làm việc với động cơ để đảm bảo an toàn động cơ cần phải có?",
        "a": "A. Dây tiếp địa, điểm đấu nối cáp điện phải có hộp bảo vệ chắc chắn, các gối đỡ phải được bôi trơn đầy đủ.",
        "b": "B. Dây tiếp địa, các gối đỡ phải được bôi trơn đầy đủ.",
        "c": "C. Dây tiếp địa, điểm đấu nối cáp điện phải có hộp bảo vệ chắc chắn.",
        "d": "D. Dây tiếp địa, các dao cách ly và máy cắt điện.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình an toàn, để đảm bảo an toàn đối với điện động cơ khi đưa ra sửa chữa, đại tu ta cần thực hiện gì?",
        "a": "A. Phải được cắt điện động cơ, treo biển báo cấm thao tác ở vị trí khoá điều khiển và thiết bị đóng cắt.",
        "b": "B. Không cần phải cắt điện động cơ, chỉ cần treo biển báo cấm thao tác ở vị trí khoá điều khiển",
        "c": "C. Phải được cắt điện động cơ, treo biển báo cấm đóng điện ở vị trí khoá điều khiển và thiết bị đóng cắt.",
        "d": "D. Không phải cắt điện động cơ, cần phải cấp PCT và cử người giám sát an toàn.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình an toàn, để đảm bảo an toàn khi làm việc với với xe nâng người, đáp án nào sau đây không đúng?",
        "a": "A. Được phép rời khỏi sàn thao tác nhưng phải tuân thủ quy định làm việc trên cao khi đang ở vị trí nâng.",
        "b": "B. Không vận hành nơi có các phương tiện di động khác đang làm việc.",
        "c": "C. Chỉ vận hành xe nâng người trên một địa hình tương đối vững chắc..",
        "d": "D. Chỉ vận hành xe nâng người gần đường dây điện (có thể vi phạm khoảng cách an toàn điện) khi đã có biện pháp cắt điện hoàn toàn (trừ trường hợp sửa chữa nóng)",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, quy định treo biển báo, tín hiệu tại các van cách ly, tủ điều khiển tại chỗ như thế nào?",
        "a": "A. Phải treo biển “Cấm thao tác! Có người đang làm việc” tại vị trí thao tác.",
        "b": "B. Phải treo biển “Cấm đóng điện! Có người đang làm việc” tại vị trí các thiết bị điện.",
        "c": "C. Phải treo biển “Cấm mở van! Có người đang làm việc” tại các vị trí đặt van.",
        "d": "D. Phải treo biển “Cấm lại gần! Nguy hiểm chết người” tại tại các thiết bị điện.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, quy định việc treo biển “Cấm thao tác! Có người đang làm việc” như thế nào?",
        "a": "A. Người thao tác phải treo biển: “Cấm thao tác! Có người đang làm việc” ở các van cách ly, tủ điều khiển tại chỗ của van. Chỉ người này hoặc người thay thế mới được tháo các biển báo này.",
        "b": "B. Người thao tác phải treo biển: “Cấm đóng điện! Có người đang làm việc” ở các bộ truyền động, nút ấn, khóa điều khiển thiết bị đóng cắt điện. Chỉ người này hoặc người thay thế mới được tháo các biển báo này.",
        "c": "C. Người thao tác phải treo biển: “Cấm thao tác! Có người đang làm việc” ở các van cách ly, tủ điều khiển tại chỗ của van. Chỉ NCHTT của ĐVCT mới được tháo các biển báo này.",
        "d": "D. Người thao tác phải treo biển: “Cấm thao tác! Có người đang làm việc” ở các van cách ly, tủ điều khiển tại chỗ của van. Chỉ Người cho phép mới được tháo các biển báo này.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, nội dung nào không đúng (không cần thiết) trong quy định công tác chuẩn bị sửa chữa các thiết bị quay?",
        "a": "A. Thiết bị đã được kiểm định đúng quy định pháp luật, còn hạn kiểm định.",
        "b": "B. Thiết bị đã dừng, động cơ và các thiết bị điện đã được cắt điện, các van đã được đặt đến vị trí an toàn cho việc thực hiện công việc sửa chữa.",
        "c": "C. Các thiết bị liên quan phải được treo biển cấm thao thao tác, khóa an toàn (nếu có). Phải có các biển báo an toàn cho các động cơ điện đã được cắt điện và thiết bị khởi động để báo hiệu cấm đóng điện và vận hành các van.",
        "d": "D. Khu vực làm việc phải có biển báo “Khu vực đang làm việc” hoặc các biển báo tương tự theo quy định hiện hành.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, khi phát hiện các thiết bị quay bị cháy phải?",
        "a": "A. Lập tức ngừng thiết bị, cắt điện. Cấm dùng cát mà phải dùng bình chữa cháy (CO2, MFZ) để dập lửa.",
        "b": "B. Kiểm tra thiết bị quay ngay. Cấm dùng cát mà phải dùng bình chữa cháy (CO2, MFZ) để dập lửa.",
        "c": "C. Lập tức ngừng thiết bị, cắt điện. Dùng cát và bình chữa cháy (CO2, MFZ) để dập lửa.",
        "d": "D. Báo cáo lãnh đạo đợn vị ngay. Dùng bình chữa cháy (CO2, MFZ) để dập lửa.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, trong quá trình chạy thử hoặc cân chỉnh các thiết bị quay, khi nhận được tín hiệu nguy hiểm, cần?",
        "a": "A. Sử dụng các nút ấn ngừng khẩn cấp. Cơ cấu này sẽ được một người tham gia giám sát an toàn cho công tác sửa chữa ấn nút ngừng khi nhận được tín hiệu nguy hiểm của Người CHTT.",
        "b": "B. Lập tức ngừng thiết bị, cắt điện. Người tham gia giám sát an toàn cho công tác sửa chữa ấn nút ngừng khi nhận được tín hiệu nguy hiểm của Người CHTT.",
        "c": "C. Sử dụng các nút ấn ngừng khẩn cấp. NCHTT ấn nút ngừng khi nhận được tín hiệu nguy hiểm của nhân viên ĐVCT.",
        "d": "D. Sử dụng các nút ấn ngừng khẩn cấp. Cơ cấu này sẽ được Người cho phép ấn nút ngừng khi nhận được tín hiệu nguy hiểm của Người CHTT.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, trước khi sử dụng thiết bị cầm tay cần kiểm tra để xác định những nội dung gì?",
        "a": "A. Thiết bị không bị rò điện ra vỏ; các vít kẹp chắc các chi tiết, nút, độ hoàn hảo của bộ truyền động, lớp vỏ bảo vệ, lõi dây điện không có vết gãy, sự hoàn hảo của nút ngắt điện và nối đất.",
        "b": "B. Thiết bị không bị rò điện ra vỏ; lõi dây điện không có vết gãy, sự hoàn hảo của nút ngắt điện và nối đất.",
        "c": "C. Các vít kẹp chắc các chi tiết, nút, độ hoàn hảo của bộ truyền động, lớp vỏ bảo vệ, lõi dây điện không có vết gãy, sự hoàn hảo của nút ngắt điện và nối đất.",
        "d": "D. Thiết bị không bị rò điện ra vỏ; các vít kẹp chắc các chi tiết, nút, độ hoàn hảo của bộ truyền động,.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, khi đang sử dụng thiết bị cầm tay mà bị ngừng làm việc, khi bị cắt điện đột xuất hay kết thúc công việc phải?",
        "a": "A. Cách ly thiết bị cầm tay khỏi nguồn điện để loại bỏ hoàn toàn điện áp.",
        "b": "B. Rút khỏi vị trí làm việc, thu dọn dụng cụ.",
        "c": "C. Yêu cầu NCHTT kiểm tra lại và tiếp tục làm việc.",
        "d": "D. Cách ly thiết bị cầm tay khỏi nguồn nhiệt.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, trước khi làm việc với máy gia công cơ khí phải?",
        "a": "A. Kiểm tra tình trạng, kỹ thuật an toàn của máy như: các bộ phận che chắn bảo vệ, dây tiếp đất, các loại dao, đá cắt mài vẫn còn trong tình trạng sử dụng tốt.",
        "b": "B. Kiểm tra điện trở nối đất khu vực đặt máy, kiểm tra rò điện qua vỏ máy.",
        "c": "C. Kiểm tra tình trạng kiểm định kỹ thuật an toàn của và chất lượng của máy vẫn còn trong tình trạng sử dụng tốt.",
        "d": "D. Kiểm tra kỹ thuật an toàn của máy theo các quy trình vận hành cho chính máy cơ khí đó.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, trong quá trình sử dụng xe cẩu, cầu trục, cần trục bánh lốp, nội dung nào không đúng (không phù hợp) quy định?",
        "a": "A. Không cho phép thực hiện công việc khi chưa cắt điện các đường dây, thiết bị điện xung quanh nơi làm việc.",
        "b": "B. Không cho phép người lên, xuống cầu trục, cần trục khi thiết bị đang hoạt động; Vừa dùng người đẩy hoặc kéo tải vừa cho cơ cấu nâng/hạ tải; Nâng, hạ và chuyển tải khi có người đứng ở trên tải.",
        "c": "C. Không cho phép nâng tải có khối lượng vượt quá tải trọng cho phép; Để tải treo lơ lửng mà không có người điều khiển; Nâng tải trong tình trạng tải chưa ổn định hoặc chỉ móc một bên của móc kép;",
        "d": "D. Không được nâng tải vùi dưới đất, bị các vật khác đè lên, bị liên kết bằng bu lông hoặc bê tông với các vật khác; Cẩu với, kéo lê tải trọng;",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, quy định về nối đất thiết bị hàn điện như thế nào?",
        "a": "A. Phải nối đất phần kim loại của thiết bị được hàn điện cũng như các kết cấu và sản phẩm hàn và máy hàn theo quy định trước khi thiết bị được nối vào nguồn.",
        "b": "B. Phải nối đất phần kim loại của máy hàn theo quy định trước khi thiết bị được nối vào nguồn.",
        "c": "C. Phải nối đất phần kim loại của thiết bị, vật được hàn điện cũng như các kết cấu và sản phẩm hàn theo quy định trước khi thiết bị được nối vào nguồn.",
        "d": "D. Không phải nối đất phần kim loại của thiết bị được hàn điện cũng như các kết cấu và sản phẩm hàn, chỉ nối đất máy hàn theo quy định trước khi thiết bị được nối vào nguồn.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, quy định điện cao áp và hạ áp như thế nào?",
        "a": "A. Điện hạ áp là điện áp đến 1000V, điện cao áp là điện áp trên 1000V trở lên.",
        "b": "B. Điện hạ áp là điện áp dưới 1000V, điện cao áp là điện áp trên 1000V trở lên.",
        "c": "C. Điện hạ áp là điện áp danh định tới 01 kV, điện cao áp là điện áp danh định trên 01 kV trở lên.",
        "d": "D. Điện hạ áp là điện áp đến 1000V, điện cao áp là điện áp từ 1000V trở lên.",
        "correct": "c"
    },
    {
        "q": "Theo Quy trình An toàn, quy định khoảng cách an toàn điện khi có rào chắn (tức là khỏng cách từ rào chắn đến đến phần có điện) đối với điện áp từ trên 1 kV đến 15kV như thế nào?",
        "a": "A. Không nhỏ hơn 0,35 mét.",
        "b": "B. Không nhỏ hơn 0,6 mét.",
        "c": "C. Không nhỏ hơn 0,8 mét.",
        "d": "D. Không nhỏ hơn 0,9 mét.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, quy định khoảng cách an toàn điện khi có rào chắn (tức là khỏng cách từ rào chắn đến đến phần có điện) đối với điện áp từ trên 15 đến 35kV như thế nào?",
        "a": "A. Không nhỏ hơn 0,7 mét.",
        "b": "B. Không nhỏ hơn 1,0 mét.",
        "c": "C. Không nhỏ hơn 0,6 mét.",
        "d": "D. Không nhỏ hơn 0,9 mét.",
        "correct": "c"
    },
    {
        "q": "Theo Quy trình An toàn, quy định khoảng cách an toàn điện khi có rào chắn (tức là khỏng cách từ rào chắn đến đến phần có điện) đối với điện áp từ trên 35 đến 110kV như thế nào?",
        "a": "A. Không nhỏ hơn 2,0 mét.",
        "b": "B. Không nhỏ hơn 0,7 mét.",
        "c": "C. Không nhỏ hơn 1,5 mét.",
        "d": "D. Không nhỏ hơn 1,0 mét.",
        "correct": "c"
    },
    {
        "q": "Theo Quy trình An toàn, quy định khoảng cách an toàn điện khi có rào chắn (tức là khỏng cách từ rào chắn đến đến phần có điện) đối với điện áp 220kV như thế nào?",
        "a": "A. Không nhỏ hơn 1,5 mét.",
        "b": "B. Không nhỏ hơn 1,0 mét.",
        "c": "C. Không nhỏ hơn 2,0 mét.",
        "d": "D. Không nhỏ hơn 2,5 mét.",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn thì sau khi cắt điện xong, cần kiểm tra không còn điện bằng cách?",
        "a": "A. Dùng bút thử điện phù hợp với điện áp cần thử (bút này phải được kiểm tra trước tại nơi có điện) sau đó thử cả 3 pha vào và ra của thiết bị",
        "b": "B. Căn cứ vào tín hiệu, đèn, đồng hồ, rơ le...",
        "c": "C. Dùng sào gõ nhẹ vào đường dây, thanh cái...",
        "d": "D. Cả 03 đáp án đều sai",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn quy định nối đất tạo vùng an toàn và nối đất tại nơi làm việc như thế nào?",
        "a": "A. ĐVCT tổ chức thực hiện nối đất tại tất cả các đầu có nguồn điện đến để tạo vùng làm việc an toàn, ĐVQLVH chịu trách nhiệm thực hiện nối đất di động tại nơi làm việc.",
        "b": "B. ĐVQLVH tổ chức thực hiện nối đất tại tất cả các đầu có nguồn điện đến để tạo vùng làm việc an toàn, ĐVCT chịu trách nhiệm thực hiện nối đất di động tại nơi làm việc.",
        "c": "C. ĐVQLVH tổ chức thực hiện nối đất tại tất cả các vị trí phải nối đất di động tại nơi làm việc.",
        "d": "D. ĐVQLVH tổ chức thực hiện nối đất di động tại nơi làm việc, ĐVCT chịu trách nhiệm thực hiện, nối đất tại tất cả các đầu có nguồn điện đến để tạo vùng làm việc an toàn.",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn, mẫu PCT tại mục “1.7. Điều kiện an toàn điện để tiến hành công việc” cách ghi thế nào?",
        "a": "A. Ghi rõ cắt điện một phần hay hoàn toàn thiết bị, đường dây, đoạn đường dây để đảm bảo an toàn điện khi tiến hành công việc;",
        "b": "B. Ghi rõ đóng, đặt tiếp đất ở đâu? Treo biển gì, chỗ nào?",
        "c": "C. Ghi rõ (số hiệu) các thiết bị đã được cắt điện (mà tại đó có khả năng đưa điện tới nơi làm việc của ĐVCT);",
        "d": "D. Ghi theo “Biên bản khảo sát hiện trường” hoặc ghi yêu cầu để đảm bảo an toàn điện cho ĐVCT làm việc: Cắt hết điện khu vực nào? Đóng, đặt tiếp đất ở đâu? Hoặc ghi không cắt điện.",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn, mẫu PCT tại mục ghi “Cảnh báo, chỉ dẫn cần thiết:” ghi những nội dung gì?",
        "a": "A. Ghi tất cả những BPAT về điện và cơ học do ĐVQLVH đã thực hiện có liên quan đến khu vực làm việc của ĐVCT.",
        "b": "B. Ghi những cảnh báo cho ĐVCT biết tại vị trí làm việc còn có những nguy cơ mất an toàn khác (như các ngăn lộ, má CD, MC…đường dây khác đang mang điện; các cảnh báo giao thông, khu đông người, các vị trí nguy hiểm cơ học khác…).",
        "c": "C. Ghi những yêu cầu về trang thiết bị, dụng cụ an toàn, BHLĐ cần thiết mà ĐVCT phải có để thực hiện công việc.",
        "d": "D. Ghi những vị trí phải đóng tiếp địa hoặc đặt tiếp địa di động trước khi triển khai thực hiện công việc.",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn thì trách nhiệm phối hợp của Người CHTT là?",
        "a": "A. Phối hợp với các cấp điều độ để cắt điện đảm bảo công tác an toàn và gìn giữ an toàn cho Nhân viên ĐVCT. Phối hợp với Người cảnh giới để đảm bảo công tác an toàn và gìn giữ an toàn cho cộng đồng.",
        "b": "B. Phối hợp với Người LĐCV, Người cấp phiếu, NCP, Người GSATĐ để đảm bảo công tác an toàn và gìn giữ an toàn cho Nhân viên ĐVCT.",
        "c": "C. Phối hợp với Người cấp phiếu, NCP, Người GSATĐ để đảm bảo công tác an toàn và gìn giữ an toàn cho Nhân viên ĐVCT. Phối hợp với Người cảnh giới để đảm bảo công tác an toàn và gìn giữ an toàn cho cộng đồng.",
        "d": "D. Phối hợp với Người cấp phiếu, NCP, Người GSATĐ để đảm bảo công tác an toàn an toàn và gìn giữ an toàn cho cộng đồng.",
        "correct": "c"
    },
    {
        "q": "Theo Quy trình An toàn, quy định về việc ĐVCT gửi Giấy đăng ký công tác đến ĐVQLVH như thế nào?",
        "a": "A. Phải gửi đến từng ĐVQLVH liên quan để các đơn vị này lập kế hoạch đăng ký cắt điện, viết PCT, Giấy phối hợp cho phép, LCT.",
        "b": "B. Gửi đến ĐVQLVH cấp PCT để đơn vị này lập kế hoạch đăng ký cắt điện, viết PCT, LCT và thông báo đến các ĐVQLVH liên quan.",
        "c": "C. Gửi đến đơn vị Điều độ để đơn vị này chỉ huy chung việc thực hiện các BPAT đối với từng ĐVQLVH liên quan.",
        "d": "D. Phải gửi đến lãnh đạo Công ty Điện lực để chỉ đạo chung việc thực hiện các BPAT đối với từng ĐVQLVH liên quan.",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn đối với cấp điện áp nào cho phép làm việc sau khi cắt điện không cần thực hiện việc đặt nối đất khi đã thỏa mãn các điều kiện về cách ly, quan sát và cảm ứng?",
        "a": "A. Với điện áp từ 10 kV trở xuống.",
        "b": "B. Với điện áp từ 35 kV trở xuống.",
        "c": "C. Với điện áp từ 15 kV trở xuống.",
        "d": "D. Với điện áp từ 22 kV trở xuống.",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn cho phép làm việc sau khi cắt điện không cần thực hiện việc đặt nối đất phải thỏa mãn đồng thời các yêu cầu sau?",
        "a": "A. Thiết bị có cấu trúc hình khối gọn, nằm trong tủ hợp bộ; không thể cách ly hoàn toàn khỏi hệ thống điện bằng, chắc chắn không có khả năng đóng nhầm điện; được sự cho phép của cấp có thẩm quyền.",
        "b": "B. Thiết bị có cấu trúc gọn, có thể thao tác dễ dàng; có thể cách ly bằng dao cách ly hoặc cầu chì mà đứng tại chỗ nhìn thấy rõ, chắc chắn không có hiện tượng mưa giông; được sự cho phép của người CHTT.",
        "c": "C. Thiết bị có cấu trúc gọn, quan sát toàn bộ dễ dàng; có thể cách ly hoàn toàn khỏi hệ thống điện mà đứng tại chỗ nhìn thấy rõ, chắc chắn không có hiện tượng cảm ứng, rò điện; được sự cho phép của cấp có thẩm quyền.",
        "d": "D. Thiết bị có cấu trúc gọn; có thể cách ly hoàn toàn khỏi hệ thống điện bằng máy cắt, có thể sử dụng bút thử điện có cấp điện áp tương ứng để kiểm tra hiện tượng cảm ứng, rò điện; được sự cho phép của cấp có thẩm quyền.",
        "correct": "c"
    },
    {
        "q": "Theo Quy trình An toàn quy định về phương tiện bảo vệ cá nhân và dụng cụ an toàn khi lắp/tháo nối đất di động như thế nào?",
        "a": "A. Người lắp/tháo phải dùng sào và ủng cách điện.",
        "b": "B. Người lắp/tháo phải đứng trên thảm cách điện.",
        "c": "C. Người lắp/tháo phải dùng sào và đứng trên ghế cách điện.",
        "d": "D. Người lắp/tháo nối đất cao áp phải dùng sào và găng cách điện. Đặt và tháo nối đất di động tại lưới hạ áp phải đeo găng tay cách điện hạ áp.",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn thì trình tự lắp đặt bộ tiếp đất di động là?",
        "a": "A. Phải có 03 người, hai người trên cột, một người dưới đất. Đấu dây tiếp đất lên dây dẫn sau đó bắt chặt đầu dây còn lại vào thân cột.",
        "b": "B. Phải có 02 người, một người trên cột, một người dưới đất. Dùng kìm đấu dây tiếp đất lên dây dẫn sau đó bắt chặt đầu dây còn lại vào thân cột.",
        "c": "C. Trước hết thử hết điện, sau đó đấu đầu dây tiếp đất với đất trước, sau đó phải dùng sào và găng cách điện để bắt đầu dây nối đất lên thiết bị, dây dẫn .",
        "d": "D. Cả 03 đáp án trên trên (dưới) đều đúng.",
        "correct": "c"
    },
    {
        "q": "Theo Quy trình An toàn quy định về nối đất khi có nhiều ĐVCT trong cùng một phạm vi có cắt điện như thế nào?",
        "a": "A. Mỗi ĐVCT vẫn phải làm nối đất độc lập cho ĐVCT của mình.",
        "b": "B. Có thể phối hợp việc đặt nối đất giữa các ĐVCT để tiết kiểm bộ nối đất và giảm thời gian thực hiện lắp đặt các bộ nối đất.",
        "c": "C. Nếu làm việc trên đường dây thì mỗi ĐVCT phải làm ít nhất 01 bộ nối đất cho ĐVCT của mình.",
        "d": "D. Nếu làm việc trong TBA thì mỗi ĐVCT phải làm ít nhất 01 bộ nối đất độc lập cho ĐVCT của mình.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, những biển nào có thể được sơn trực tiếp trên thiết bị, trên cột điện?",
        "a": "A. Các biển “Cấm đóng điện! Có người đang làm việc”, Cấm vào! Điện cao áp nguy hiểm chết người” “Cấm lại gần! Có điện nguy hiểm chết người”, “Chú ý! Phía trên có điện”.",
        "b": "B. Các biển “Cấm trèo! Điện cao áp nguy hiểm chết người”, “Cấm vào! Điện cao áp nguy hiểm chết người”, “Cấm lại gần! Có điện nguy hiểm chết người”, “Có điện nguy hiểm”, “Chú ý! Phía trên có điện”.",
        "c": "C. Các biển “Cấm trèo! Điện cao áp nguy hiểm chết người”, “Cấm đóng điện không đồng bộ”, “Cấm lại gần! Có điện nguy hiểm chết người”, “Chú ý! Phía trên có điện”.",
        "d": "D. Các biển “Cấm trèo! Điện cao áp nguy hiểm chết người”, “Cấm vào! Điện cao áp nguy hiểm chết người”, “ Cáp điện lực”, “Chú ý! Phía trên có điện”.",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn thì ĐVQLVH cấp PCT phải thực hiện nhiệm vụ gì sau khi đã nhận được Giấy đăng ký công tác của ĐVLCV?",
        "a": "A. Lập kế hoạch đăng ký cắt điện, viết PCT, cấp Giấy phối hợp cho phép, LCT.",
        "b": "B. Lập kế hoạch đăng ký cắt điện, viết PCT, LCT.",
        "c": "C. Viết phương án tổ chức thi công và BPAT, viết PCT, cấp Giấy phối hợp cho phép.",
        "d": "D. Lập kế hoạch đăng ký cắt điện, cấp Giấy phối hợp cho phép, lập PTT.",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn, quy định về chất liệu và quy cách của dây nối đất lưu động như thế nào?",
        "a": "A. Dây nối đất là dây chuyên dùng, bằng đồng hoặc hợp kim nhiều sợi, mềm và có thể có lớp bọc bảo vệ bằng nhựa trong.",
        "b": "B. Dây nối đất là dây đồng hoặc hợp kim mềm, nhiều sợi, tiết diện phải chịu được tác dụng lực điện động và nhiệt..",
        "c": "C. Dây nối đất là dây chuyên dùng, bằng nhôm hoặc hợp kim nhiều sợi, mềm và có lớp bọc bảo vệ.",
        "d": "D. Dây nối đất là dây chuyên dùng, bằng đồng trần hoặc hợp kim nhiều sợi, mềm. Nếu có lớp bọc bảo vệ bên ngoài thì tốt.",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn, quy định về tiết diện của dây nối đất lưu động như thế nào?",
        "a": "A. Tiết diện không được nhỏ hơn 16 mm2 đối với lưới điện phân phối, 25 mm2 đối với lưới điện truyền tải.",
        "b": "B. Tiết diện không được nhỏ hơn 25 mm2 đối với lưới điện phân phối, 35 mm2 đối với lưới điện truyền tải.",
        "c": "C. Tiết diện không được nhỏ hơn 16 mm2 đối với lưới điện cấp điện áp đến 35kV, 35 mm2 đối với lưới điện cấp điện áp lớn hơn 35kV.",
        "d": "D. Tiết diện không được nhỏ hơn 10 mm2 đối với lưới điện phân phối, 16 mm2 đối với lưới điện truyền tải.",
        "correct": "c"
    },
    {
        "q": "Theo Quy trình An toàn, quy định về dây nối đất chống điện áp cảm ứng như thế nào?",
        "a": "A. Dây nối đất phải chịu được dòng điện do điện áp cảm ứng sinh ra, tiết diện không được nhỏ hơn 16 mm2",
        "b": "B. Dây nối đất phải chịu được dòng điện do điện áp cảm ứng sinh ra, tiết diện không được nhỏ hơn 25 mm2",
        "c": "C. Dây nối đất phải chịu được dòng điện do điện áp công nghiệp sinh ra, tiết diện không được nhỏ hơn 10 mm2",
        "d": "D. Dây nối đất phải chịu được dòng điện do điện áp cảm ứng sinh ra, tiết diện không được nhỏ hơn 10 mm2",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn nội dung nào sau đây không thuộc trách nhiệm của người CHTT trong việc kiểm tra các biện pháp an toàn phù hợp với công việc?",
        "a": "A. Kiểm tra, tiếp nhận biện pháp an toàn do người cho phép bàn giao và thực hiện đầy đủ các biện pháp an toàn cần thiết khác; Kiểm tra việc chấp hành các quy định về an toàn của nhân viên ĐVCT.",
        "b": "B. Kiểm tra chất lượng của các dụng cụ, trang bị an toàn, thời hạn thử nghiệm cho phép sử dụng của máy, thiết bị, vật tư có yêu cầu nghiêm ngặt về an toàn lao động;",
        "c": "C. Đặt, di chuyển, tháo dỡ các biển báo an toàn điện, rào chắn, nối đất di động trong khi làm việc và phổ biến cho tất cả nhân viên ĐVCT biết.",
        "d": "D. Kiểm tra các PCT, PTT khác có liên quan đến công việc và vị trí làm việc của ĐVCT do mình làm CHTT.",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn, quy định các công việc thực hiện theo LCT bao gồm?",
        "a": "A. Công việc có độ rủi ro cấp 1; Làm việc ở xa nơi có điện; Làm việc ở thiết bị, đường dây điện hạ áp trong một số trường hợp; Công việc không cần phải thực hiện các BPKT chuẩn bị vị trí làm việc.",
        "b": "B. Làm việc ở gần nơi có điện; Xử lý sự cố thiết bị, đường dây; Làm việc ở thiết bị, đường dây điện hạ áp trong một số trường hợp; Công việc cần phải thực hiện các BPKT chuẩn bị vị trí làm việc.",
        "c": "C. Làm việc ở xa nơi có điện; Thay thế thiết bị, đường dây; Làm việc ở thiết bị, đường dây điện hạ áp trong mọi trường hợp; Công việc không cần phải thực hiện các BPKT chuẩn bị vị trí làm việc.",
        "d": "D. Làm việc ở xa nơi có điện; Xử lý sự cố thiết bị, đường dây; Làm việc ở thiết bị, đường dây điện hạ áp không cắt điện; Công việc cần phải thực hiện các BPKT chuẩn bị vị trí làm việc.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, khi làm xong công việc, điều nào không đúng khi người CHTT thực hiện những công việc sau?",
        "a": "A. Cho ĐVCT thu dọn, vệ sinh nơi làm việc và kiểm tra, xem xét lại để hoàn thiện tất cả những việc có liên quan.",
        "b": "B. Cho nhân viên ĐVCT rút khỏi nơi làm việc, chỉ để lại những người tháo nối đất, chỉ huy tháo nối đất, tháo gỡ những TIện pháp an toàn do ĐVCT làm.",
        "c": "C. Ghi và ký vào Mục 6.1 của PCT (cả bản PCT do người CHTT giữ và bản của người cho phép giữ), trao trả nơi làm việc và PCT cho người cho phép.",
        "d": "D. Trong trường hợp đã tháo nối đất nhưng chưa ký khóa PCT mà còn có công việc dang dở, cho phép tiếp tục hoàn thiện công việc đó.",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn, quy định trách nhiệm của ĐVQLVH về việc cắt điện để làm việc như thế nào?",
        "a": "A. Chủ động phối hợp với đơn vị điều độ cắt điện theo đúng kế hoạch, đảm bảo thời gian làm việc, không kể các thao tác cắt điện thuộc các ĐVQLVH khác; Cử nhân viên vận hành thực hiện các BPKT chuẩn bị nơi làm việc.",
        "b": "B. Chủ động phối hợp với đơn vị điều độ cắt điện theo đúng kế hoạch, đảm bảo thời gian làm việc; Cử nhân viên vận hành thực hiện các BPKT chuẩn bị nơi làm việc.",
        "c": "C. Chủ động phối hợp với ĐVQLVH khác cắt điện theo đúng kế hoạch, đảm bảo thời gian làm việc; Cử nhân viên vận hành thực hiện các BPKT chuẩn bị nơi làm việc.",
        "d": "D. Chủ động phối hợp với ĐVLCV cắt điện theo đúng kế hoạch, đảm bảo thời gian làm việc (kể cả các thao tác cắt điện thuộc các ĐVQLVH khác); Cử nhân viên vận hành thực hiện các BPKT chuẩn bị nơi làm việc.",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn, khi di chuyển, vận hành xe chuyên dùng trong khu vực trạm phải đảm bảo khoảng cách an toàn như thế nào ?",
        "a": "A. Khoảng cách nhỏ nhất từ bất kỳ bộ phận nào của xe đến phần mang điện của trạm không nhỏ hơn khoảng cách an toàn điện không rào chắn.",
        "b": "B. Khoảng cách nhỏ nhất từ bất kỳ bộ phận nào của xe đến phần mang điện của trạm không nhỏ hơn khoảng cách an toàn phóng điện khi có rào chắn.",
        "c": "C. Khoảng cách nhỏ nhất từ bất kỳ bộ phận nào của xe đến phần mang điện của trạm không nhỏ hơn khoảng cách an toàn điện theo quy định về hành lang an toàn lưới điện cao áp.",
        "d": "D. Khoảng cách nhỏ nhất từ bất kỳ bộ phận nào của xe đến phần mang điện của trạm không nhỏ hơn 02 mét.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, quy định về nối đất xe chuyên dùng trong trường hợp nào?",
        "a": "A. Khi làm việc có cắt điện một phần hoặc ở gần nơi có điện, bệ xe cần cẩu, xe thang và xe nâng di động phải được nối đất.",
        "b": "B. Khi làm việc có cắt điện toàn bộ, bệ xe cần cẩu, xe thang và xe nâng di động phải được nối đất.",
        "c": "C. Khi làm việc không cắt điện, bệ xe cần cẩu, xe thang và xe nâng di động không phải nối đất.",
        "d": "D. Không cần nối đất các bộ phận của xe chuyên dùng trong mọi trường hợp.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, điều nào không đúng trong quy định về xử lý sự cố xe chuyên dùng?",
        "a": "A. Khi có hiện tượng phóng điện vào xe, cấm người chạm vào xe, rời khỏi xe hoặc bước lên xe trước khi cắt nguồn điện gây phóng điện.",
        "b": "B. Nếu xe bị cháy khi chưa kịp cắt điện, người lái xe phải nhảy ra khỏi xe.",
        "c": "C. Khi nhảy phải nhảy cả hai chân và đứng yên tại chỗ, nếu cần chạy ra xa phải nhảy cả hai chân một lúc.",
        "d": "D. Khi có hiện tượng phóng điện vào xe, nhanh chóng nhảy xuống xe và chạy nhanh ra xa xe.",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn, cắt điện để làm công việc trong những trường hợp nào?",
        "a": "A. Những phần có điện mà tại đó sẽ tiến hành công việc; khi làm việc Hotline.",
        "b": "B. Những phần có điện mà tại đó sẽ tiến hành công việc; khi làm việc không thể tránh được va chạm hoặc vi phạm khoảng cách đến phần đã cắt điện.",
        "c": "C. Những phần có điện mà tại đó sẽ tiến hành công việc; khi làm việc có thể đảm bảo khoảng cách an toàn với phần mang điện hoặc không vi phạm khoảng cách đến phần mang điện.",
        "d": "D. Những phần có điện mà tại đó sẽ tiến hành công việc; khi làm việc không thể tránh được va chạm hoặc vi phạm khoảng cách đến phần mang điện.",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn, biển “CẤM TRÈO! ĐIỆN ÁP CAO NGUY HIỂM CHẾT NGƯỜI” đặt ở đâu?",
        "a": "A. Trên tất cả các cột của đường dây dẫn điện cao, hạ áp ở độ cao từ 2,0 m đến 2,5 m so với mặt đất về phía dễ nhìn thấy.",
        "b": "B. Trên tất cả các cột của đường dây dẫn điện cao áp ở độ cao từ 2,0 m đến 2,5 m so với mặt đất về phía dễ nhìn thấy.",
        "c": "C. Trên tất cả các cột của đường dây dẫn điện hạ áp ở độ cao từ 2,0 m đến 2,5 m so với mặt đất về phía dễ nhìn thấy.",
        "d": "D. Trên tất cả các cột của đường dây dẫn điện cao áp ở độ cao từ 1,0 m đến 1,5 m so với mặt đất về phía dễ nhìn thấy.",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn, biển “CẤM ĐÓNG ĐIỆN! CÓ NGƯỜI ĐANG LÀM VIỆC” được đặt như thế nào?",
        "a": "A. Trên bộ phận điều khiển, truyền động thiết bị đóng cắt đã cắt điện theo PTT của các cấp điều độ.",
        "b": "B. Trên bộ phận điều khiển, truyền động thiết bị đóng cắt đã cắt điện cho đơn vị công tác làm việc.",
        "c": "C. Trên bộ phận điều khiển, cánh tủ phân phối đang vận hành bình thường cho đơn vị quản lý vận hành.",
        "d": "D. Trên bộ phận điều khiển, truyền động thiết bị đóng cắt đã cắt điện khi chuyển đổi kết dây cơ bản.",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn, biển “LÀM VIỆC TẠI ĐÂY” được đặt như thế nào?",
        "a": "A. Đặt tại đầu lối vào khu vực làm việc của ĐVCT.",
        "b": "B. Đặt tại khu vực đã đóng DNĐ hoặc đã đặt nối đất lưu động.",
        "c": "C. Đặt tại nơi làm việc đã cho phép; tại khu vực làm việc đã đặt nối đất.",
        "d": "D. Đặt tại nơi làm việc đã được khoanh vùng; tại khu vực làm việc của ĐVCT.",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn, biển “VÀO HƯỚNG NÀY” được đặt như thế nào?",
        "a": "A. Đặt tại đầu lối vào khu vực làm việc của ĐVCT.",
        "b": "B. Đặt tại khu vực đã đóng DNĐ hoặc đã đặt nối đất lưu động.",
        "c": "C. Đặt tại nơi làm việc đã cho phép; tại khu vực làm việc đã đặt nối đất.",
        "d": "D. Đặt tại đầu lối vào khu vực thao tác của ĐVQLVH.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, biển “ĐÃ NỐI ĐẤT” được đặt như thế nào?",
        "a": "A. Đặt tại khu vực đã cắt điện và đặt nối đất lưu động.",
        "b": "B. Đặt tại khu vực đã đóng DNĐ hoặc đã đặt nối đất lưu động.",
        "c": "C. Đặt tại khu vực đã đặt nối đất lưu động trong TBA.",
        "d": "D. Đặt tại khu vực đã đóng DNĐ trên đường dây",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn, cho phép thay đổi kích thước các biển cho phù hợp với thực tế để treo tại đâu?",
        "a": "A. Tại các vị trí trên tủ điều khiển, ở các thiết bị hạ áp, aptomat hạ áp tại các tủ bảng điện.",
        "b": "B. Tại các vị trí trên các cột điện cao áp.",
        "c": "C. Tại các vị trí trong các TBA từ 110kV trở lên",
        "d": "D. Tại các vị trí trên các thiết bị đô lường, điều khiển, tín hiệu.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, thì khoảng cách cho phép nhỏ nhất đến phần có điện cao áp xoay chiều được quy định như thế nào?",
        "a": "A. Từ 1-35kV là 0,6 mét; Từ trên 35kV-110kV là 1,5 mét.",
        "b": "B. Từ 1-35kV là 0,7 mét; Từ trên 35kV-110kV là 2,0 mét",
        "c": "C. Từ trên 1-35kV là 0,6 mét; Từ trên 35kV-110kV là 1,0 mét",
        "d": "D. Từ 1-35kV là 0,8 mét; Từ trên 35kV-110kV là 2,5 mét",
        "correct": "c"
    },
    {
        "q": "Theo Quy trình An toàn, trong các BPAT khi làm việc có điện thì nội dung nào không đúng (không phù hợp)?",
        "a": "A. Phải có xe Hotline chuyên dùng và các dụng cụ sửa chữa có chất lượng tốt, còn hạn kiểm định",
        "b": "B. Kiểm tra các kết cấu kim loại tại nơi làm việc có khả năng tiếp xúc phải đảm bảo không có điện.",
        "c": "C. Khi làm việc trên hoặc gần phần có điện cao áp, Nhân viên đơn vị công tác không được mang theo đồ trang sức hoặc vật dụng cá nhân bằng kim loại.",
        "d": "D. Phải sử dụng trang thiết bị, dụng cụ, phương tiện bảo vệ thích hợp. Khi làm việc có điện, tại vị trí làm việc Nhân viên đơn vị công tác phải xác định phần có điện gần nhất.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, quy định khoảng cách an toàn điện khi không có rào chắn đối với điện áp 220kV như thế nào?",
        "a": "A. Không nhỏ hơn 1,5 mét.",
        "b": "B. Không nhỏ hơn 1,0 mét.",
        "c": "C. Không nhỏ hơn 2,0 mét.",
        "d": "D. Không nhỏ hơn 2,5 mét.",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn, quy định khoảng cách an toàn điện khi không có rào chắn đối với điện áp từ trên 35 đến 110kV như thế nào?",
        "a": "A. Không nhỏ hơn 2,0 mét.",
        "b": "B. Không nhỏ hơn 0,7 mét.",
        "c": "C. Không nhỏ hơn 1,5 mét.",
        "d": "D. Không nhỏ hơn 1,0 mét.",
        "correct": "c"
    },
    {
        "q": "Theo Quy trình An toàn, quy định khoảng cách an toàn điện khi không có rào chắn đối với điện áp từ trên 15 đến 35kV như thế nào?",
        "a": "A. Không nhỏ hơn 0,7 mét.",
        "b": "B. Không nhỏ hơn 1,0 mét.",
        "c": "C. Không nhỏ hơn 0,6 mét.",
        "d": "D. Không nhỏ hơn 0,35 mét.",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn, quy định khoảng cách an toàn điện khi không có rào chắn đối với điện áp từ trên 1 đến 15kV như thế nào?",
        "a": "A. Không nhỏ hơn 0,7 mét.",
        "b": "B. Không nhỏ hơn 0,6 mét.",
        "c": "C. Không nhỏ hơn 1,0 mét.",
        "d": "D. Không nhỏ hơn 0,35 mét",
        "correct": "a"
    },
    {
        "q": "Dùng ampe kìm để đo dòng điện ở thiết bị điện cao áp trong trường hợp nào sau đây là đúng?",
        "a": "A. Chỉ được dùng ampe kìm để đo dòng điện ở thiết bị điện cao áp từ 35 kV trở xuống. Phần cách điện khi sử dụng ampe kìm đo ở thiết bị điện cao áp phải trong thời hạn thử nghiệm. Không sử dụng ampe kìm đo nếu phần cách điện ở phía miệng kìm bị nứt, vỡ.",
        "b": "B. Chỉ được đo thiết bị điện có cấp điện áp từ 22 kV trở xuống và phải có ampe mét lắp ngay trên kìm.",
        "c": "C. Chỉ được đo thiết bị điện có cấp điện áp từ 15 kV trở xuống và phải có ampe mét lắp ngay trên kìm.",
        "d": "D. Chỉ được đo thiết bị điện có cấp điện áp từ 6 kV trở xuống và phải có ampe mét lắp ngay trên kìm.",
        "correct": "a"
    },
    {
        "q": "Cắt điện và thực hiện các biện pháp ngăn chặn có điện trở lại nơi làm việc phải thực hiện những nội dung nào sau đây?",
        "a": "A. Đường dây, thiết bị điện tiến hành công việc phải được xác định đã cách ly khỏi các phần có điện từ mọi phía.",
        "b": "B. Đối với những máy phát điện diesel hoặc những nguồn điện bằng nguồn năng lượng sơ cấp khác khi hoạt động phải tách khỏi lưới điện.",
        "c": "C. Phải cách ly được những nguồn điện cao, hạ áp qua các máy biến áp lực, máy biến áp đo lường, các nguồn điện khác cấp điện ngược trở lại gây nguy hiểm cho người làm việc.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng.",
        "correct": "d"
    },
    {
        "q": "Khi không có rào chắn tạm thời, khoảng cách an toàn điện đối với điện áp xoay chiều tối thiểu đến phần mang điện đối với cấp điện áp 22 kV là?",
        "a": "A. 0,35 m.",
        "b": "B. 0,6 m.",
        "c": "C. 0,7 m.",
        "d": "D. 1 m.",
        "correct": "d"
    },
    {
        "q": "Khi không có rào chắn tạm thời, khoảng cách an toàn điện đối với điện áp xoay chiều tối thiểu đến phần mang điện đối với cấp điện áp 110 kV là?",
        "a": "A. 0,7 m",
        "b": "B. 1,5 m.",
        "c": "C. 2,5 m.",
        "d": "D. 3.5 m.",
        "correct": "b"
    },
    {
        "q": "Khi không có rào chắn tạm thời, khoảng cách an toàn điện đối với điện áp xoay chiều tối thiểu đến phần mang điện đối với cấp điện áp 35 kV là?",
        "a": "A. 0,35 m.",
        "b": "B. 0,6 m.",
        "c": "C. 0,7 m.",
        "d": "D. 1 m.",
        "correct": "d"
    },
    {
        "q": "(Thời hạn) Chu kỳ thí nghiệm định kỳ sào thao tác cách điện cao áp là bao nhiêu?",
        "a": "A. 6 tháng.",
        "b": "B. 9 tháng.",
        "c": "C. 12 tháng.",
        "d": "D. 15 tháng.",
        "correct": "c"
    },
    {
        "q": "(Thời hạn) Chu kỳ thí nghiệm định kỳ găng tay cách điện cao áp là bao nhiêu?",
        "a": "A. 3 tháng.",
        "b": "B. 6 tháng.",
        "c": "C. 9 tháng.",
        "d": "D. 12 tháng.",
        "correct": "b"
    },
    {
        "q": "(Thời hạn) Chu kỳ thí nghiệm định kỳ ủng cách điện cao áp là bao nhiêu?",
        "a": "A. 3 tháng.",
        "b": "B. 6 tháng.",
        "c": "C. 9 tháng.",
        "d": "D. 12 tháng.",
        "correct": "b"
    },
    {
        "q": "Khi cứu nạn nhân bị điện giật đang chạm vào mạch điện cao áp thì người cứu nạn nhân phải thực hiện nội dung nào?",
        "a": "A. Ý 1 - Mang ủng, găng tay cách điện và dùng sào cách điện để gạt hoặc đẩy nạn nhân ra khỏi mạch điện.",
        "b": "B. Ý 2 - Dùng gậy gỗ, tre khô gạt dây điện hoặc đẩy nạn nhân để tách ra, hoặc dùng tay khô hay có bọc lót ni lon, bìa giấy khô …. để nắm vào áo, quần khô của nạn nhân kéo ra.",
        "c": "C. Ý 3 - Dùng sợi dây kim loại tiếp đất một đầu và ném đầu kia vào cả 3 pha làm ngắn mạch để đường dây bị cắt điện rồi tách nạn nhân ra khỏi mạch điện.",
        "d": "D. Cả Y1 và Ý 3 đều đúng.",
        "correct": "a"
    },
    {
        "q": "Nhân viên đơn vị công tác có bậc an toàn điện 1/5 được làm những công việc nào sau đây?",
        "a": "A. Được làm các công việc không tiếp xúc với thiết bị hoặc dây dẫn mang điện.",
        "b": "B. Được làm các công việc có tiếp xúc với thiết bị hoặc dây dẫn mang điện.",
        "c": "C. Được làm việc tại nơi đã được cắt điện hoàn toàn.",
        "d": "D. Được làm việc tại nơi được cắt điện từng phần.",
        "correct": "a"
    },
    {
        "q": "Nhân viên đơn vị công tác có bậc an toàn điện 2/5 được làm những công việc nào sau đây?",
        "a": "A. Thực hiện thao tác trên lưới điện cao áp.",
        "b": "B. Làm việc tại nơi đã được cắt điện hoàn toàn.",
        "c": "C. Làm việc trực tiếp với đường dây, thiết bị điện hạ áp đang mang điện.",
        "d": "D. Công việc vệ sinh cách điện bằng nước áp lực cao.",
        "correct": "b"
    },
    {
        "q": "Trong khi thực hiện nhiệm vụ, nhân viên đơn vị công tác cần tuân thủ những quy định nào sau đây?",
        "a": "A. Chấp hành đúng nhiệm vụ đã được phân công.",
        "b": "B. Có thể làm thêm công việc ngoài phạm vi cho phép để ngăn ngừa sự cố xảy ra khi đóng điện lại thiết bị, đường dây.",
        "c": "C. Thực hiện công việc theo lệnh của người chỉ huy trực tiếp ở ngoài phạm vi cho phép làm việc.",
        "d": "D. Nhân viên đơn vị công tác phải chấp hành nghiêm nhiệm vụ được phân công, tuân thủ hướng dẫn của Nguời chỉ huy trực tiếp và không làm những việc mà Người chỉ huy trực tiếp không giao.",
        "correct": "d"
    },
    {
        "q": "Nhân viên đơn vị công tác có bậc 3/5 an toàn điện được thực hiện những công việc nào sau đây?",
        "a": "A. Ý 1 - Làm việc trực tiếp với đường dây, thiết bị điện cao áp đang mang điện.",
        "b": "B. Ý 2 - Cấp lệnh công tác, chỉ huy trực tiếp, cho phép đơn vị công tác vào làm việc, giám sát đơn vị công tác làm việc trên đường dây, thiết bị điện hạ áp.",
        "c": "C. Ý 3 - Thực hiện thao tác trên lưới điện cao áp.",
        "d": "D. Cả Ý 2 và Ý 3 đều đúng.",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn điện, những công việc thực hiện theo phiếu công tác chưa được đánh giá rủi ro bao gồm?",
        "a": "A. Tất cả các đáp án trên (dưới) đều đúng",
        "b": "B. Làm việc với ĐD/thiết bị điện áp cao: Cắt điện, có điện hoặc gần phần có điện áp cao (có thể vi phạm khoảng cách ATĐ)",
        "c": "C. Làm việc với ĐD/thiết bị điện hạ áp: Đại tu, sửa chữa lớn",
        "d": "D. Làm việc với ĐD/thiết bị điện hạ áp: Thay, kéo dây đường trục; thay, chuyển cột điện, chuyển điểm đấu nối",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, nội dung nào dưới đây là quy định đúng và được áp dụng để thực hiện nối đất tạo vùng an toàn khi làm việc?",
        "a": "A. Nội dung (1) và (2).",
        "b": "B. (1). Việc dỡ bỏ tạm thời nối đất di động để thực hiện các công việc cần thiết của Đơn vị công tác chỉ được thực hiện theo lệnh của Người chỉ huy trực tiếp và phải được thực hiện nối đất lại ngay sau khi kết thúc công việc đó.",
        "c": "C. (2). Khi sửa chữa hoặc thí nghiệm cần mở tiếp địa cố định, phải dùng nối đất di động để thay thế nếu vẫn còn Đơn vị công tác đang làm việc trên ĐD, thiết bị điện.",
        "d": "D. (3). Đơn vị điều độ giữ quyền điều khiển tổ chức thực hiện nối đất tại tất cả các đầu có nguồn điện đến để tạo vùng làm việc an toàn trước khi bàn giao hiện trường.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, quy định nào dưới đây cho phép làm việc sau khi cắt điện mà không cần thực hiện việc đặt nối đất di động?",
        "a": "A. Áp dụng với điện áp từ 35 kV trở xuống, những thiết bị cắt điện để công tác thỏa mãn đồng thời các yêu cầu tại đáp án (1) và (2).",
        "b": "B. (1). Thiết bị điện có cấu trúc gọn, quan sát toàn bộ dễ dàng.",
        "c": "C. (2). Có thể cách ly hoàn toàn khỏi lưới điện bằng thiết bị đóng cắt mà đứng tại chỗ nhìn thấy rõ, chắc chắn khoảng hở và không có hiện tượng rò điện.",
        "d": "D. Áp dụng với điện áp từ 22 kV trở xuống, những thiết bị cắt điện để công tác thỏa mãn đồng thời các yêu cầu tại đáp án (1) và (2).",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, quy định nào dưới đây không đúng (chưa đúng) khi đã cắt điện, cho phép làm việc mà không cần thực hiện việc đặt nối đất di động?",
        "a": "A. Áp dụng với điện áp từ 110 kV trở xuống, những thiết bị cắt điện để công tác thỏa mãn đồng thời các yêu cầu tại đáp án (1) và (2).",
        "b": "B. (1). Chắc chắn không có hiện tượng cảm ứng điện từ xuất hiện trên thiết bị điện đó.",
        "c": "C. (2). Cho phép không cần nối đất di động được ghi rõ trong PCT/LCT.",
        "d": "D. Áp dụng với điện áp từ 35 kV trở xuống, những thiết bị cắt điện để công tác thỏa mãn đồng thời các yêu cầu tại đáp án (1) và (2).",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, những công việc nào dưới đây cho phép làm việc sau khi cắt điện mà không cần thực hiện việc đặt nối đất di động?",
        "a": "A. Những công việc như đo, kiểm tra điện trở nối đất, đo các thông số của thiết bị điện, ĐD mà bắt buộc không được nối đất; củng cố lại nối đất của thiết bị điện, ĐD hoặc của hệ thống nối đất toàn trạm.",
        "b": "B. Sửa chữa, thay thế thanh cái, thiết bị điện tại nhà máy, trạm điện dưới sự giám sát trực tiếp của nhân viên vận hành.",
        "c": "C. Tháo, lắp, câu đấu đầu cáp xuất tuyến, đầu cáp chuyển tiếp; thay dây dẫn nhánh 2 dây thuộc đường dây hạ áp; thay thế, sửa chữa áptômát tại tủ phân phối 400V.",
        "d": "D. Tất cả các đáp án trên (dưới)",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, thanh cái, thiết bị điện tại nhà máy, trạm điện cho phép không cần nối đất di động nếu đủ điều kiện nào dưới đây?",
        "a": "A. Thỏa mãn điều kiện (1) hoặc (2).",
        "b": "B. (1). Đã được cách ly hoàn toàn, đã khóa thiết bị đóng cắt liên quan để tránh thao tác nhầm.",
        "c": "C. (2). Đã được tiếp địa cố định.",
        "d": "D. Thỏa mãn điều kiện (1) và (2).",
        "correct": "d"
    },
    {
        "q": "Công việc nào sau đây không bắt buộc phải khảo sát hiện trường trước khi lập Phương án tổ chức thi công và biện pháp an toàn?",
        "a": "A. Công việc có thể vi phạm khoảng cách an toàn điện.",
        "b": "B. Công việc không đủ yếu tố được thực hiện theo kế hoạch và có yếu tố nguy hiểm cho cộng đồng.",
        "c": "C. Sửa chữa nóng (hotline).",
        "d": "D. Làm việc trên ĐD vượt sông, vượt đường.",
        "correct": "b"
    },
    {
        "q": "Trường hợp nào sau đây được phép lập Phương án tổ chức thi công và biện pháp an toàn mẫu (Phương án mẫu)?",
        "a": "A. Lắp đặt, sửa chữa lưới điện hạ áp đi chung cột với ĐDK cao áp.",
        "b": "B. Công việc khắc phục ngay hậu quả thiên tai, xử lý sự cố.",
        "c": "C. Công việc có mức độ rủi ro từ cấp 2 trở lên.",
        "d": "D. Thí nghiệm các trang thiết bị điện, dụng cụ an toàn được thực hiện trong xưởng, phòng thí nghiệm, không liên quan gì tới lưới điện.",
        "correct": "d"
    },
    {
        "q": "Khi làm việc trong môi trường có điện từ trường cao, các bộ phận, kết cấu kim loại của thiết bị, phương tiện, dụng cụ dùng trong trạm hay trên ĐDK 220 kV phải được xử lý như thế nào?",
        "a": "A. Phải được sơn phản xạ để giảm nhiệt độ.",
        "b": "B. Phải được bọc cách điện hoàn toàn.",
        "c": "C. Phải được nối đất theo quy định.",
        "d": "D. Phải được đặt cách xa ĐDK ít nhất 50m",
        "correct": "c"
    },
    {
        "q": "Khi làm việc với ĐDK đã cắt điện, hành động nào sau đây bị cấm?",
        "a": "A. Tiến hành công tác trên chuỗi sứ sau khi đã xem xét kỹ các phụ kiện còn tốt và đủ.",
        "b": "B. Làm việc ở trên ĐDK cao áp với ít nhất 02 người thực hiện.",
        "c": "C. Làm việc trên ĐDK vào ban đêm khi có đủ ánh sáng.",
        "d": "D. Làm việc trên ĐDK khi bắt đầu có gió cấp 6 trở lên hoặc có mưa nặng hạt, nước chảy thành dòng trên người và thiết bị điện.",
        "correct": "d"
    },
    {
        "q": "Khi làm việc với các chi tiết, dụng cụ bằng kim loại, Nhân viên đơn vị công tác không được mang theo vật dụng nào sau đây lên cột hoặc gần phần có điện áp cao?",
        "a": "A. Đồ trang sức hoặc vật dụng cá nhân bằng kim loại.",
        "b": "B. Túi đựng đồ nghề bằng vải bạt chuyên dùng.",
        "c": "C. Các chi tiết bằng kim loại đã được nối đất.",
        "d": "D. Kìm, tuốc-nơ-vít, cờ-lê bằng kim loại có cán cách điện.",
        "correct": "a"
    },
    {
        "q": "Câu 01: Theo Quy trình An toàn, kiểm tra định kỳ đường dây, khi trèo lên cột phải ?",
        "a": "A. Kiểm tra sơ bộ tình trạng của móng cột và cột. Nếu trèo lên cột trên 2,0m thì phải thực hiện đúng các quy định về an toàn điện và làm việc trên cao. Cấm trèo và làm việc ở phía đặt tay xà có sứ đỡ dây dẫn trên cột đơn.",
        "b": "B. Trường hợp cần thiết, cho phép trèo lên cột trên 2,0m không có dây đeo an toàn.",
        "c": "C. Trường hợp cần thiết, khi làm việc trên cao, cho phép trèo lên cột bê-tông ly tâm không sử dụng ty leo chuyên dùng.",
        "d": "D. Kiểm tra, đánh giá tình trạng của móng cột và cột. Cho phép trèo lên cột trên 2,0m không cần sử dụng dây lưng an toàn đối với cột sắt có suốt hoặc ti leo. Cho phép trèo và làm việc ở phía đặt tay xà có sứ đỡ dây dẫn trên cột đơn.",
        "correct": "a"
    },
    {
        "q": "Câu 02: Theo Quy trình An toàn, làm công việc trên đường dây đã cắt điện, quy định nào sau đây đúng?",
        "a": "A. Phải có tiếp đất tại nơi làm việc theo quy định của Quy trình an toàn điện.",
        "b": "B. Nếu đường dây đã mất điện do sự cố thì không cần tiếp đất nơi làm việc",
        "c": "C. Nếu máy cắt đầu xuất tuyến đã cô lập thì không cần tiếp đất nơi làm việc",
        "d": "D. Thực hiện theo cả 3 đáp án trên (dưới)",
        "correct": "a"
    },
    {
        "q": "Câu 03: Theo Quy trình An toàn, khi chặt cây ở gần đường dây phải thực hiện theo những quy định nào sau đây là đúng?",
        "a": "A. Thực hiện cả 3 đáp án trên (dưới)",
        "b": "B. Người chưa huấn luyện và kiểm tra, chưa có kinh nghiệm không trực tiếp chặt cây",
        "c": "C. Người chỉ huy trực tiếp phải thông báo cho nhân viên đơn vị công tác biết về nguy hiểm khi trèo lên cây, khi cây và dây thừng tiếp xúc hoặc vi phạm khoảng cách an toàn với dây dẫn",
        "d": "D. Khi chặt cây phải chặt cành mục, cây mục trước, khi cây sắp đổ, cành sắp gẫy phải báo cho người xung quanh biết",
        "correct": "a"
    },
    {
        "q": "Câu 04: Theo Quy trình An toàn, khi chặt cây ở gần đường dây phải thực hiện theo những quy định nào sau đây là đúng?",
        "a": "A. Thực hiện cả 3 ý trên (dưới)",
        "b": "B. Khi chặt cây phải dùng dây để buộc chuôi dao với cổ tay tránh rơi vào người khác, Dây an toàn phải được buộc vào cành cây hoặc thân cây chắc chắn",
        "c": "C. Phải cắt điện đường dây nếu khi chặt cây, chặt cành có khả năng đổ, rơi vào đường dây. Nếu không cắt điện thì phải có biện pháp để hạ cây, cành an toàn",
        "d": "D. Chặt cây trong hành lang an toàn đường dây cao áp phải có phiếu công tác hoặc lệnh công tác",
        "correct": "a"
    },
    {
        "q": "Câu 05: Theo Quy trình An toàn, Chặt cây gần đường dây phải làm thế nào để bảo đảm an toàn điện?",
        "a": "A. Nếu không có biện pháp hạ cành, cây an toàn thì phải cắt điện",
        "b": "B. Chặt cây ở phía đối diện với đường dây",
        "c": "C. Phải buộc thừng kéo cây về phía xa đường dây cả B và C",
        "d": "D. Chặt cành, cây chuẩn bị đổ thì di chuyển ra xa cách vị trí cây 10m để đảm bảo an toàn",
        "correct": "a"
    },
    {
        "q": "Câu 06: Theo Quy trình An toàn, Khi chặt cây sắp đổ, cành sắp gẫy thì phải có hành động gì?",
        "a": "A. Phải báo cho người xung quanh biết",
        "b": "B. Hạ cây, hạ cành thật từ từ",
        "c": "C. Phải tránh xa khu vực cây sắp đổ, cành sắp rơi gẫy",
        "d": "D. Bao gồm cả 3 ý trên (dưới)",
        "correct": "a"
    },
    {
        "q": "Câu 07: Theo Quy trình An toàn, khi dùng dao để chặt cây, quy trình ATĐ lưu ý người chặt cây điều nào?",
        "a": "A. Dùng dây buộc chuôi dao với cổ tay",
        "b": "B. Dùng dao có cán dài, chắc chắn Chú ý cầm nắm chuôi dao sao cho thật chắc",
        "c": "C. Tất cả các đáp án trên (dưới)",
        "d": "D. Dùng dao có bao da và đặt trong túi đồ mang theo người",
        "correct": "a"
    },
    {
        "q": "Câu 08: Theo Quy trình An toàn, Khi dựng cột ở gần đường dây điện cao áp đang vận hành thì phải đặt các phương tiện trục kéo đảm bảo yêu cầu gì?",
        "a": "A. Cấm đặt các phương tiện trục kéo phía dưới dây dẫn của đường dây đang vận hành",
        "b": "B. Không chằng néo trục kéo vào cột đường dây vận hành",
        "c": "C. Không vi phạm khoảng cách nguy hiểm với đường dây vận hành",
        "d": "D. Bao gồm cả 3 đáp án trên (dưới)",
        "correct": "a"
    },
    {
        "q": "Câu 09: Theo Quy trình An toàn, Khi dựng cột ở gần đường dây điện cao áp đang vận hành, dây cáp kéo và cáp hãm được quy định như thế nào?",
        "a": "A. Phải bố trí sao cho khi bị bật, đứt không thể văng lên đường dây vận hành",
        "b": "B. Dùng thừng buộc gìm từng đoạn xuống",
        "c": "C. Bố trí cách thật xa đường dây đang vận hành",
        "d": "D. Trong mọi trường hợp phải bố trí dây cáp hãm cách cột 10m",
        "correct": "a"
    },
    {
        "q": "Câu 10: Theo Quy trình An toàn, Chỉ được phép lắp đặt dây dẫn ở chỗ giao chéo với đường dây cao áp đang vận hành trong trường hợp nào sau đây?",
        "a": "A. Dây lắp đặt đi dưới dây vận hành",
        "b": "B. Dây lắp đặt đi trên dây vận hành",
        "c": "C. Cả hai trường hợp trên đều được",
        "d": "D. Cả 3 đáp án trên (dưới) đều không được phép",
        "correct": "a"
    },
    {
        "q": "Câu 11: Theo Quy trình An toàn, Khi làm việc ở trên cột của đường dây cao áp có điện phải thực hiện những quy định sau đây ?",
        "a": "A. Bao gồm cả 3 đáp án trên (dưới)",
        "b": "B. Cấm dùng thước làm bằng thép (kim loại) để đo.",
        "c": "C. Không buông thõng tự do các đầu dây thừng.",
        "d": "D. Dây thừng phải làm bằng sợi (bông, đay, dù) có đủ chiều dài theo yêu cầu công việc và không có chỗ dễ bị đứt. Hệ số an toàn của dây thừng không nhỏ hơn 4,0.",
        "correct": "a"
    },
    {
        "q": "Câu 12: Theo Quy trình An toàn, quy định nối đất khi làm việc trên đường dây hai nguồn cấp không có nhánh rẽ là ?",
        "a": "A. Tại vị trí làm việc phải có 02 bộ tiếp đất dây dẫn chặn về 2 phía, nếu tiếp đất này cản trở đến công việc thì được phép tiếp đất 1 đầu.",
        "b": "B. Phải đặt bộ tiếp đất ở vị trí liền kề gần nhất vị trí làm việc.",
        "c": "C. Nếu làm việc trên đường dây, phải làm nối đất ở hai đầu đường dây.",
        "d": "D. Không được phép đặt tiếp đất tại vị trí làm việc trong mọi trường hợp.",
        "correct": "c"
    },
    {
        "q": "Câu 13: Theo Quy trình An toàn, quy định nối đất khi làm việc trên đường dây một nguồn cấp không có nhánh rẽ là ?",
        "a": "A. Tại vị trí làm việc phải có bộ tiếp đất dây dẫn, nếu tiếp đất này cản trở đến công việc thì được phép làm ở vị trí liền kề gần nhất vị trí làm việc.",
        "b": "B. Phải đặt bộ tiếp đât ở vị trí liền kề gần nhất vị trí làm việc.",
        "c": "C. Cho phép đặt nối đất ở đầu đường dây có nguồn cung cấp đến, đầu còn lại phải mở thiết bị đóng cắt.",
        "d": "D. Không được phép đặt tiếp đất tại vị trí làm việc trong mọi trường hợp.",
        "correct": "c"
    },
    {
        "q": "Câu 14: Theo Quy trình An toàn thì khi thực hiện công việc có tháo rời dây dẫn, việc đặt tiếp đất di động được thực hiện như thế nào?",
        "a": "A. Phải tiếp đất phía nguồn đến chỗ định tháo rời trước khi tháo.",
        "b": "B. Phải quấn gọn dây dẫn về hai phía khi tháo lèo (dây dẫn).",
        "c": "C. Phải tiếp đất ở hai phía chỗ định tháo rời trước khi tháo.",
        "d": "D. Chỉ phải tiếp đất ở vị trí cần tháo rời.",
        "correct": "c"
    },
    {
        "q": "Câu 15: Theo Quy trình An toàn, quy định nối đất khi làm việc trên ĐDK có nhiều nguồn cấp đến và có nhánh rẽ như thế nào?",
        "a": "A. Phải làm nối đất ở tất cả các đầu ĐDK và các nhánh có thiết bị đóng cắt.",
        "b": "B. Phải làm nối đất ở các đầu ĐDK có nguồn cấp đến tại các nhánh rẽ và phải cắt các DCL đầu nhánh không có nguồn cấp.",
        "c": "C. Phải làm nối đất ở các đầu ĐDK có nguồn cấp đến, các nhánh không có nguồn cấp đến mở thiết bị đóng cắt, không có thiết bị đóng cắt thì phải làm một bộ nối đất ở nhánh đó.",
        "d": "D. Phải làm nối đất ở cuối ĐDK có nguồn cấp đến, các nhánh không có nguồn cấp đến mở thiết bị đóng cắt.",
        "correct": "c"
    },
    {
        "q": "Câu 16: Theo Quy trình An toàn, quy định về kiểm tra định kỳ đường dây bằng mắt là ?",
        "a": "A. Được phép làm việc 1 người. Phải xem như đường dây đang có điện, kiểm tra tiến hành trên mặt đất, ban đêm phải có đèn soi, chú ý dây dẫn bị chùng võng và đứt, rơi.",
        "b": "B. Cho phép đi kiểm tra 01người; nếu có trèo cột thì không được ra chuỗi sứ. Ban đêm phải có đèn soi; đi cách đường dây 5 mét trước hướng gió và không được trèo cột.",
        "c": "C. Cho phép đi kiểm tra 01 người; không được sờ vào bất cứ vật, phụ kiện của cột điện. Ban đêm phải có đèn soi; đi cách đường dây 15 mét trước hướng gió và không được trèo cột.",
        "d": "D. Kiểm tra ít nhất phải có 02 người; được phép kiểm tra và lau sứ ở đĩa sứ trên cùng đối với sứ chuỗi. Ban đêm phải có đèn soi; đi cách đường dây 5 mét trước hướng gió.",
        "correct": "a"
    },
    {
        "q": "Câu 17: Theo Quy trình An toàn khi thấy dây dẫn rơi xuống đất hoặc lơ lửng thì ?",
        "a": "A. Phải cử người đứng gác cách vị trí rơi dây ít nhất 15 mét; báo ngay cho An toàn, Kỹ thuật và Điều độ",
        "b": "B. Phải cử người đứng gác cách vị trí rơi dây ít nhất 10 mét (kể cả bản thân); báo ngay cho Điều độ",
        "c": "C. Phải báo ngay cho Điều độ đồng thời dùng cây gỗ khô gạt gọn dây dẫn",
        "d": "D. Nhanh chóng dùng dây kim loại ném lên dây dẫn ở khoảng cách thuận lợi nhất để MC đầu nguồn nhảy, đảm bảo an toàn cho người qua lại",
        "correct": "b"
    },
    {
        "q": "Câu 18: Theo Quy trình An toàn thì những nhóm việc nào sau đây được thực hiện khi có trèo lên cột từ vị trí cách dây dẫn cuối cùng 1,5 mét  lên đến đỉnh cột để làm việc khi đường dây 110kV đang vận hành?",
        "a": "A. Thay xà, sứ, dây dẫn, dây chống sét",
        "b": "B. Sơn xà, gỡ tổ chim, kiểm tra dây dẫn, mối nối, phụ kiện",
        "c": "C. Tháo thanh cột, lắp chụp, dây néo cột, lắp tụ bù, chống sét van đường dây",
        "d": "D. Tháo lắp đèn báo độ cao và phụ kiện.",
        "correct": "b"
    },
    {
        "q": "Câu 19: Theo Quy trình An toàn, quy định làm việc trên đường dây đã cắt điện nhưng giao chéo với với đường dây đang vận hành như thế nào?",
        "a": "A. Cấm lắp đặt dây dẫn và dây chống sét tại đường dây cao áp giao chéo đi dưới đường dây cao áp khác đang vận hành.",
        "b": "B. Tháo và nối dây trong khoảng cột có giao chéo với đường dây cao áp khác đang vận hành thì phải cắt điện các đường dây phía dưới đường dây đang sửa chữa, trừ trường hợp đặc biệt..",
        "c": "C. Cấm lắp đặt dây dẫn và dây chống sét tại đường dây cao áp giao chéo đi trên đường dây hạ áp đang vận hành và đi đưới đường dây cao áp khác đang vận hành.",
        "d": "D. Cấm lắp đặt dây dẫn và dây chống sét tại đường dây cao áp song song ngang đi (kẹp) giữa hai đường dây cao áp khác đang vận hành.",
        "correct": "b"
    },
    {
        "q": "Câu 20: Theo Quy trình An toàn, quy định điều kiện chung cho phép lắp đặt dây dẫn và dây chống sét trên đường dây cao áp hai mạch chung cột khi mạch kia vẫn còn điện là ?",
        "a": "A. Dây dẫn gần nhất của mạch thứ nhất với mạch thứ 2 là: 2 mét đối với đường dây điện áp đến 35 kV; 4 mét đối với đường dây điện áp 110 kV; 6 mét đối với đường dây điện áp từ 220 kV",
        "b": "B. Dây dẫn gần nhất của mạch thứ nhất với mạch thứ 2 là: 2 mét đối với đường dây điện áp đến 35 kV; 4 mét đối với đường dây điện áp 110 kV; 5 mét đối với đường dây điện áp từ 220 kV",
        "c": "C. Dây dẫn gần nhất của mạch thứ nhất với mạch thứ 2 là: 3 mét đối với đường dây điện áp đến 35 kV; 5 mét đối với đường dây điện áp 110 kV;  6 mét đối với đường dây điện áp từ 220 kV",
        "d": "D. Dây dẫn gần nhất của mạch thứ nhất với mạch thứ 2 là: 3 mét đối với đường dây điện áp đến 35 kV; 4 mét đối với đường dây điện áp 110 kV; 6 mét đối với đường dây điện áp từ 220 kV",
        "correct": "d"
    },
    {
        "q": "Câu 21: Theo Quy trình An toàn, quy định việc đặt tiếp đất khi làm việc trên đoạn đường dây trục có nhánh rẽ mà không cắt được dao cách ly là ?",
        "a": "A. Mỗi nhánh phải làm một bộ tiếp đất ở đầu nhánh.",
        "b": "B. Tách lèo đấu dây ở các đầu nhánh.",
        "c": "C. Không phải đặt tiếp đất ở đầu nhánh do đã có tiếp đất trên đường trục.",
        "d": "D. Cả 3 đáp án trên (dưới) đều sai.",
        "correct": "a"
    },
    {
        "q": "Câu 22: Theo Quy trình An toàn, quy định việc đặt tiếp đất khi làm việc trên đường dây bọc nếu tại vị trí công tác không có đấu nối hoặc đấu nối bảo đảm kín (cách điện) mà không tháo rời dây dẫn là ?",
        "a": "A. Phải làm tiếp đất ở đầu khoảng dây bọc (áp tô mát hoặc đầu cáp xuất tuyến…).",
        "b": "B. Phải bóc cách điện dây bọc để đấu tiếp đất ở hai đầu khoảng dây theo quy định.",
        "c": "C. Không cần đặt tiếp đất vì là dây bọc.",
        "d": "D. Phải đặt tiếp đất ở các điểm nối dây dẫn liền kề và vị trí tiếp đất phải được xác định ngay từ khi khảo sát.",
        "correct": "d"
    },
    {
        "q": "Câu 23: Theo Quy trình An toàn, quy định nguyên tắc đặt tiếp đất khi làm việc trên đường dây hạ áp là ?",
        "a": "A. Cho phép làm tiếp đất bằng cách chập cả 3 pha với dây trung tính.",
        "b": "B. Cho phép làm tiếp đất 1 pha khi chỉ làm việc trên pha đó.",
        "c": "C. Nối đất tại các pha đầu nguồn (aptomat tổng/aptomat nhánh hoặc sau aptomat nhánh).",
        "d": "D. Trong mọi trường hợp, không cho phép làm tiếp đất bằng cách chập cả 3 pha với dây trung tính và nối với đất mà phải nối đất bằng bộ tiếp đất di động đúng quy cách.",
        "correct": "c"
    },
    {
        "q": "Câu 24: Theo Quy trình An toàn, quy định trường hợp thay dây, nối dây hoặc tháo rời dây dẫn hạ áp phải nối đất như thế nào?",
        "a": "A. Cho phép làm tiếp đất bằng cách chập cả 3 pha với dây trung tính.",
        "b": "B. Cho phép làm tiếp đất 1 pha khi chỉ làm việc trên pha đó.",
        "c": "C. Mọi đoạn ĐD tách rời phải có ít nhất một điểm nối đất các pha",
        "d": "D. Trong mọi trường hợp, không cho phép làm tiếp đất bằng cách chập cả 3 pha với dây trung tính và nối với đất mà phải nối đất bằng bộ tiếp đất di động đúng quy cách.",
        "correct": "c"
    },
    {
        "q": "Câu 25: Theo Quy trình An toàn, quy định quy cách đặt tiếp đất khi làm việc trên đường dây hạ áp là ?",
        "a": "A. Cho phép làm tiếp đất bằng cách chập cả 3 pha với dây trung tính.",
        "b": "B. Cho phép làm tiếp đất 1pha khi chỉ làm việc trên pha đó",
        "c": "C. Cho phép làm tiếp đất bằng cách chập cả 3 pha với dây trung tính và nối với đất.",
        "d": "D. Trong mọi trường hợp, không cho phép làm tiếp đất bằng cách chập cả 3 pha với dây trung tính và nối với đất mà phải nối đất bằng bộ tiếp đất di động đúng quy cách.",
        "correct": "c"
    },
    {
        "q": "Câu 26: Theo Quy trình An toàn, quy định điều kiện về khoảng cách dây dẫn khi làm việc trên đường dây đã cắt điện nhưng đi chung cột với đường dây đang vận hành là ?",
        "a": "A. Khoảng cách nhỏ nhất giữa các dây dẫn gần nhất của hai mạch không nhỏ hơn 2,0 mét; 3,0 mét; 5,0 mét tương ứng với cấp điện áp: Đến 35kV; 110kV; 220kV.",
        "b": "B. Khoảng cách nhỏ nhất giữa các dây dẫn gần nhất của hai mạch không nhỏ hơn 3,0 mét; 4,0 mét; 6,0 mét tương ứng với cấp điện áp: Đến 35kV; 110kV; 220kV.",
        "c": "C. Khoảng cách nhỏ nhất giữa các dây dẫn gần nhất của hai mạch không nhỏ hơn 2,0 mét; 6,0 mét; 7,0 mét tương ứng với cấp điện áp: Đến 35kV; 110kV; 220kV.",
        "d": "D. Khoảng cách nhỏ nhất giữa các dây dẫn gần nhất của hai mạch không nhỏ hơn 2,0 mét; 3,0 mét; 4,0 mét tương ứng với cấp điện áp: Đến 35kV; 110kV; 220kV.",
        "correct": "b"
    },
    {
        "q": "Câu 27: Theo Quy trình An toàn khi làm việc trên đường dây hạ áp đang có điện, nếu trên cột có nhiều đường dây có điện áp khác nhau thì phải ?",
        "a": "A. Có biển báo chỉ rõ điện áp từng đường dây. Phải xác định rõ đường dây sẽ tiến hành công việc thuộc TBA nào để làm đủ, đúng các biện pháp an toàn trước khi cho phép làm việc.",
        "b": "B. Có biển báo chỉ rõ điện áp từng đường dây. Phải xác định rõ đường dây sẽ tiến hành công việc thuộc TBA nào. Phải coi tất cả các đường dây còn lại đang có điện.",
        "c": "C. Phải có cờ báo chỉ rõ điện áp từng đường dây. Phải xác định rõ đường dây sẽ tiến hành công việc thuộc TBA nào để thực hiện thao tác cắt điện trước khi cho phép làm việc.",
        "d": "D. Phải kiểm tra bằng bút thử điện để xác định rõ đường dây sẽ tiến hành công việc thuộc TBA nào để thực hiện thao tác cắt điện trước khi cho phép làm việc.",
        "correct": "a"
    },
    {
        "q": "Câu 28: Theo Quy trình An toàn, quy định việc treo cờ khi làm việc trên đường dây chung cột một mạch còn điện như thế nào?",
        "a": "A. Đối với đường dây đi chung cột có cấp điện áp từ 35 kV trở lên phải đặt cờ báo hiệu “mầu xanh” tại phía đường dây đã nối đất, cờ báo hiệu “mầu đỏ” phía đường dây có điện.",
        "b": "B. Đối với đường dây đi chung cột có cấp điện áp từ 220 kV trở lên phải đặt cờ báo hiệu “mầu vàng” tại phía đường dây đã nối đất, cờ báo hiệu “mầu xanh” phía đường dây có điện.",
        "c": "C. Đối với đường dây đi chung cột có cấp điện áp từ 110 kV trở lên phải đặt cờ báo hiệu “mầu vàng” tại phía đường dây đã cắt điện, cờ báo hiệu “mầu đỏ” phía đường dây đã nối đất,",
        "d": "D. Phải kiểm tra đúng tuyến ĐDK đã được cắt điện, đồng thời phải có đủ các loại biển báo an toàn, cờ để treo ở các cột hai ĐDK đi chung.",
        "correct": "d"
    },
    {
        "q": "Câu 29: Theo Quy trình An toàn, trường hợp làm việc trên đường dây hoặc nơi làm việc ở quá xa nơi trực vận hành thì khi nghỉ hết ngày làm việc thì thủ tục an toàn như thế nào?",
        "a": "A. Cho phép người CHTT được giữ lại PCT, nhưng phải thông báo những việc đã làm để người cho phép (hoặc nhân viên vận hành) biết để ghi, ký vào PCT do mình giữ, ghi sổ nhật ký vận hành.",
        "b": "B. Cho phép người CHTT được giữ lại PCT, nhưng phải thông báo những việc đã làm để người cấp phiếu (hoặc nhân viên vận hành) biết để ghi, ký vào PCT do mình giữ.",
        "c": "C. Không cho phép người CHTT được giữ lại PCT, trường hợp cần thiết có thể thông báo những việc đã làm để người cho phép (hoặc nhân viên vận hành).",
        "d": "D. Cho phép người CHTT được giữ lại PCT, nhưng phải thông báo những việc đã làm cho người cấp phiếu và ĐVQLVH biết để ghi, ký vào sổ nhật ký vận hành.",
        "correct": "a"
    },
    {
        "q": "Câu 30: Theo Quy trình An toàn, quy định cấm chặt cây trong những trường hợp nào?",
        "a": "A. Khi có gió cấp 6 trở lên; Cưa cây sẵn hàng loạt rồi làm đổ cây bằng cách cho cây này làm đổ cây kia; Đứng ở phía cây đổ và phía đối diện.",
        "b": "B. Khi có gió cấp 4 trở lên; Cưa cây sẵn hàng loạt rồi làm đổ cây bằng cách cho cây này làm đổ cây kia; Đứng ở phía cây đổ và phía đối diện.",
        "c": "C. Khi có gió cấp 5 trở lên; Cưa cây sẵn hàng loạt rồi làm đổ cây bằng cách cho cây này làm đổ cây kia; Buộc chuôi giao vào cổ tay để chặt cây.",
        "d": "D. Khi có gió cấp 8 trở lên; Dùng dây thừng đẻ kéo dây về phía đối diện; Đứng ở phía cây đổ và phía đối diện.",
        "correct": "b"
    },
    {
        "q": "Câu 31: Theo Quy trình An toàn, quy định làm việc trên cột có đường dây đang vận hành một người trong trường hợp nào?",
        "a": "A. Công việc tại móng cột, trèo lên cột dưới 3,0 m, không tháo dỡ cấu kiện cột được phép làm việc 01 người có bậc 3 an toàn điện trở lên.",
        "b": "B. Công việc tại móng cột, trèo lên cột dưới 2,0 m, không tháo dỡ cấu kiện cột được phép làm việc 01 người có bậc 4 an toàn điện trở lên.",
        "c": "C. Công việc tại móng cột, trèo lên cột dưới 2,0 m, không tháo dỡ cấu kiện cột được phép làm việc 01 người có bậc 3 an toàn điện trở lên.",
        "d": "D. Công việc tại móng cột, trèo lên cột dưới 3,0 m, không tháo dỡ cấu kiện cột được phép làm việc 01 người có bậc 5 an toàn điện trở lên.",
        "correct": "c"
    },
    {
        "q": "Câu 32: Theo Quy trình An toàn, quy định về tổ chức khi sơn xà và phần trên của cột, gỡ tổ chim, kiểm tra dây dẫn, dây chống sét, mối nối, sứ và các phụ kiện khác trên đường dây đang vận hành như thế nào ?",
        "a": "A.  Cho phép nhân viên ĐVCT thực hiện công việc có điện một mình. Trong trường hợp khẩn cấp, phải báo cáo với người có trách nhiệm và chờ lệnh của người CHTT.",
        "b": "B.  Nhân viên ĐVCT không được thực hiện công việc có điện một mình. Trong trường hợp khẩn cấp, phải báo cáo với người của ĐVQLVH và chờ lệnh của người cho phép.",
        "c": "C.  Có thể thực hiện công việc có điện một mình. Trong trường hợp khẩn cấp, phải báo cáo với Điều độ viên và chờ lệnh của người CHTT.",
        "d": "D.  Nhân viên ĐVCT không được thực hiện công việc có điện một mình. Trong trường hợp khẩn cấp, phải báo cáo với người có trách nhiệm và chờ lệnh của người CHTT.",
        "correct": "d"
    },
    {
        "q": "Câu 33: Theo Quy trình An toàn những công việc nào được phép làm trên đường dây đang vận hành trong phạm vi từ vị trí cách dây dẫn cuối cùng theo chiều thẳng đứng bằng khoảng cách an toàn lên đến đỉnh cột?",
        "a": "A. Sơn xà và phần trên của cột, gỡ tổ chim, kiểm tra dây dẫn, dây chống sét, mối nối, sứ và các phụ kiện khác.",
        "b": "B. Thay xà, sứ và phần trên của cột, gỡ tổ chim, kiểm tra dây dẫn, dây chống sét, mối nối, sứ và các phụ kiện khác.",
        "c": "C. Sơn xà và phần trên của cột, thay sứ, kiểm tra dây dẫn, dây chống sét, mối nối, sứ và các phụ kiện khác.",
        "d": "D. Sơn xà và phần trên của cột, gỡ tổ chim, thay chống sét van đường dây, kiểm tra dây chống sét, mối nối, sứ và các phụ kiện khác.",
        "correct": "a"
    },
    {
        "q": "Câu 34: Theo Quy trình An toàn quy định về điều kiện nhân lực khi làm trên đường dây đang vận hành từ vị trí cách dây dẫn cuối cùng theo chiều thẳng đứng bằng khoảng cách an toàn lên đến đỉnh cột như thế nào?",
        "a": "A. Phải được đào tạo, huấn luyện, qua thao diễn thực hành thông thạo, kiểm tra bằng bài viết, vấn đáp trực tiếp đạt yêu cầu. Phải có bậc 4 an toàn điện trở lên.",
        "b": "B. Phải được đào tạo, huấn luyện, qua thao diễn thực hành thông thạo, kiểm tra bằng bài viết, vấn đáp trực tiếp đạt yêu cầu. Phải có bậc 3 an toàn điện trở lên.",
        "c": "C. Phải được đào tạo, huấn luyện, kiểm tra bằng bài viết, vấn đáp trực tiếp ngay trước khi thực thi công việc đạt yêu cầu. Phải có bậc 2 an toàn điện trở lên.",
        "d": "D. Phải được đào tạo, huấn luyện, qua thao diễn thực hành thông thạo, kiểm tra bằng bài viết, vấn đáp trực tiếp đạt yêu cầu. Phải có bậc 5 an toàn điện trở lên.",
        "correct": "b"
    },
    {
        "q": "Câu 35: Theo Quy trình An toàn, khi sơn xà và phần trên của cột ngoài những quy định an toàn khác thì phải thực hiện những BPKTAT gì?",
        "a": "A. Phải đứng thẳng để di chuyển người dọc theo xà; Đảm bảo khoảng cách an toàn điện; Tránh để sơn rơi lên dây dẫn và sứ; Chổi sơn phải làm bằng cán gỗ hoặc vật liệu cách điện không dài quá 10 cm.",
        "b": "B. Cúi thấp người sát mặt xà để di chuyển; Đảm bảo khoảng cách an toàn điện; Tránh để sơn rơi lên dây dẫn và sứ; Chổi sơn phải làm bằng cán gỗ hoặc vật liệu cách điện không dài quá 20 cm.",
        "c": "C. Cấm đứng thẳng để di chuyển người dọc theo xà; Đảm bảo khoảng cách an toàn điện; Tránh để sơn rơi lên dây dẫn và sứ; Chổi sơn phải làm bằng cán gỗ hoặc vật liệu cách điện không dài quá 10 cm.",
        "d": "D. Cần đứng thẳng để di chuyển người dọc theo xà; Đảm bảo khoảng cách an toàn điện; Tránh để sơn rơi lên dây dẫn và sứ; Chổi sơn phải làm bằng cán gỗ hoặc vật liệu cách điện không dài quá 15 cm.",
        "correct": "c"
    },
    {
        "q": "Câu 36: Theo Quy trình An toàn, khi tháo hoặc nối dây trong khoảng cột giao chéo với đường dây đang vận hành phải thực hiện những quy định nào sau đây?",
        "a": "A. Phải cắt điện các đường dây đi song song với đường dây sửa chữa. Trường hợp không thể cắt điện đường dây đi song song thì cho phép bọc cách điện đường dây có điện.",
        "b": "B. Phải cắt điện đường dây đang sửa chữa. Trường hợp không thể cắt điện đường dây đang sửa chữa thì cho phép làm bọc cách điện đường dây đang sửa chữa để cách ly với đường dây có điện.",
        "c": "C. Phải cắt điện các đường dây ở phía trên đường dây sửa chữa. Trường hợp không thể cắt điện đường dây ở phía dưới thì cho phép làm giàn giáo để cách ly với đường dây có điện.",
        "d": "D. Phải cắt điện các đường dây ở phía dưới đường dây sửa chữa. Trường hợp không thể cắt điện đường dây ở phía dưới thì cho phép làm giàn giáo để cách ly với đường dây có điện.",
        "correct": "d"
    },
    {
        "q": "Câu 37: Theo Quy trình An toàn, quy định để đảm bảo an toàn khi làm giàn giáo để tháo hoặc nối dây trong khoảng cột giao chéo với đường dây đang vận hành như thế nào?",
        "a": "A. Trong thời gian làm giàn giáo phải cắt điện đường dây phía dưới và phải được lập thành phương án cụ thể, được cấp có thẩm quyền của ĐVLCV phê duyệt.",
        "b": "B. Trong thời gian làm giàn giáo không được cắt điện đường dây phía dưới nhưng phải lập thành kế hoạch cụ thể, được cấp có thẩm quyền của ĐVLCV phê duyệt.",
        "c": "C. Đối với đường dây hạ áp khi làm giàn giáo không phải cắt điện đường dây phía dưới và phải được lập thành phương án cụ thể, được cấp có thẩm quyền của ĐVLCV phê duyệt.",
        "d": "D. Trong thời gian làm giàn giáo phải cắt điện đường dây sẽ làm việc và phải được lập thành phương án cụ thể, được cấp có thẩm quyền của ĐVLCV phê duyệt.",
        "correct": "a"
    },
    {
        "q": "Câu 38: Theo Quy trình An toàn, khi làm việc trên đường dây đã cắt điện nhưng đi chung cột với đường dây đang vận hành điện áp đến 35 kV quy định về khoảng cách dây dẫn như thế nào?",
        "a": "A. Khoảng cách giữa hai dây dẫn gần nhất của hai mạch có thể nhỏ hơn 3,0 m nhưng phải lớn hơn từ 1,5 m trở lên thì cho phép tiến hành công việc có trèo lên cột ở mạch đang có điện.",
        "b": "B. Khoảng cách giữa hai dây dẫn gần nhất của hai mạch có thể nhỏ hơn 3,0 m nhưng phải lớn hơn từ 2,5 m trở lên thì không cho phép tiến hành công việc có trèo lên cột ở mạch đang có điện.",
        "c": "C. Khoảng cách giữa hai dây dẫn gần nhất của hai mạch có thể nhỏ hơn 3,0 m nhưng phải lớn hơn từ 2,0 m trở lên thì cho phép tiến hành công việc có trèo lên cột ở mạch đã cắt điện.",
        "d": "D. Khoảng cách giữa hai dây dẫn gần nhất của hai mạch có thể nhỏ hơn 3,0 m nhưng phải lớn hơn từ 1,0 m trở lên thì cho phép tiến hành công việc có trèo lên cột ở mạch đang có điện.",
        "correct": "c"
    },
    {
        "q": "Câu 39: Theo Quy trình An toàn, khi làm việc trên đường dây đã cắt điện nhưng đi chung cột với đường dây đang vận hành điện áp đến 35 kV quy định về thời tiết như thế nào?",
        "a": "A. Cấm làm việc khi có gió cấp 5 trở lên, sương mù dày và ban đêm; cấm ra dây dẫn trên cột, cuộn dây dẫn thành cuộn trên cột, dùng thước đo bằng nhựa.",
        "b": "B. Cấm làm việc khi có gió cấp 6 trở lên, sương mù dày và ban đêm; cấm lắp xà trên cột, cuộn dây dẫn thành cuộn trên cột, dùng thước đo bằng kim loại.",
        "c": "C. Cấm làm việc khi có gió cấp 3 trở lên, sương mù dày và ban đêm; cấm thay sứ trên cột, cuộn dây dẫn thành cuộn trên cột, dùng thước đo bằng kim loại.",
        "d": "D. Cấm làm việc khi có gió cấp 4 trở lên, sương mù dày và ban đêm; cấm ra dây dẫn trên cột, cuộn dây dẫn thành cuộn trên cột, dùng thước đo bằng kim loại.",
        "correct": "d"
    },
    {
        "q": "Câu 40: Theo Quy trình An toàn, trường hợp làm việc trên đường dây cao áp đến 35 kV đã cắt điện nhưng phía dưới có đường dây hạ áp đi chung cột đang vận hành thì quy định như thế nào?",
        "a": "A. Bắt buộc phải cắt điện đường dây hạ áp ở phía dưới để căng, kéo dây đường dây phía và không phải lập phương án.",
        "b": "B. Nếu không thể cắt điện đường dây hạ áp ở phía dưới để căng, kéo dây đường dây phía trên thì phải làm giàn giáo để tiến hành công việc.",
        "c": "C. Nếu không thể cắt điện đường dây hạ áp ở phía dưới để căng, kéo dây đường dây phía trên thì phải có biện pháp không để dây dẫn của đường dây phía trên trùng xuống đường dây hạ áp.",
        "d": "D. Nếu không thể cắt điện đường dây hạ áp ở phía dưới để căng, kéo dây đường dây phía trên thì phải được lập thành phương án cụ thể, được cấp có thẩm quyền phê duyệt.",
        "correct": "d"
    },
    {
        "q": "Câu 41: Theo Quy trình An toàn, lắp đặt trên đường dây nhiều mạch khi các mạch còn lại đang vận hành, quy định về khoảng cách như thế nào?",
        "a": "A. Khoảng cách nhỏ nhất từ người (kể cả dụng cụ khi cầm, mang) đến dây dẫn có điện là: 0,6 m; 1,0 m; 2,0 m tương ứng với cấp điện áp: Đến 35kV; 110kV; 220kV.",
        "b": "B. Khoảng cách nhỏ nhất từ người (kể cả dụng cụ khi cầm, mang) đến dây dẫn có điện là: 0,7 m; 1,0 m; 2,5 m tương ứng với cấp điện áp: Đến 35kV; 110kV; 220kV.",
        "c": "C. Khoảng cách nhỏ nhất từ người (kể cả dụng cụ khi cầm, mang) đến dây dẫn có điện là: 1,0 m; 1,5 m; 2,0 m tương ứng với cấp điện áp: Đến 35kV; 110kV; 220kV.",
        "d": "D. Khoảng cách nhỏ nhất từ người (kể cả dụng cụ khi cầm, mang) đến dây dẫn có điện là: 1,0 m; 1,5 m; 2,5 m tương ứng với cấp điện áp: Đến 35kV; 110kV; 220kV.",
        "correct": "a"
    },
    {
        "q": "Câu 42: Theo Quy trình An toàn, lắp đặt trên đường dây nhiều mạch khi các mạch còn lại đang vận hành, để tránh nhầm lẫn, quy ước về nhận dạng mạch điện như thế nào?",
        "a": "A. ĐVCT phải biết rõ tên và số hiệu mạch đường dây trên đó sẽ tiến hành công việc. Quy ước với chữ “Đang làm việc” hoặc “Đã tiếp đất” là nhìn theo dọc đường dây về phía số thứ tự cột giảm dần.",
        "b": "B. ĐVCT phải biết rõ tên và số hiệu mạch đường dây trên đó sẽ tiến hành công việc. Quy ước với chữ “phải” hoặc “trái” là nhìn theo dọc đường dây về phía số thứ tự cột tăng dần.",
        "c": "C. ĐVCT phải biết rõ tên và số hiệu mạch đường dây trên đó sẽ tiến hành công việc. Quy ước với chữ “đỏ” hoặc “vàng” là nhìn theo dọc đường dây về phía số thứ tự cột tăng dần.",
        "d": "D. ĐVCT phải biết rõ tên và số hiệu mạch đường dây trên đó sẽ tiến hành công việc. Quy ước với chữ “Đường dây đang có điện” hoặc “Đường dây đã cắt điện” là nhìn theo dọc đường dây về phía số thứ tự cột tăng dần",
        "correct": "b"
    },
    {
        "q": "Câu 43: Theo Quy trình An toàn, lắp đặt trên đường dây nhiều mạch khi các mạch còn lại đang vận hành quy định về nối đất dây dẫn trong khi lấy độ võng như thế nào?",
        "a": "A. Phải nối đất dây dẫn đang lắp đặt tại cột đỡ trong khoảng tiến hành kéo dây. Ở cột kim loại, dây dẫn được coi như đã được nối đất qua ròng rọc, còn ở cột phi kim loại, chưa có hệ thống nối đất thì ròng rọc phải được nối đất riêng.",
        "b": "B. Phải nối đất dây dẫn đang lắp đặt tại cột chuyển hướng sẽ tiến hành kéo dây. Ở cột kim loại, dây dẫn được coi như đã được nối đất qua ròng rọc, còn ở cột phi kim loại, chưa có hệ thống nối đất dây dẫn riêng.",
        "c": "C. Phải nối đất dây dẫn đang lắp đặt tại cột néo tiến hành kéo dây. Ở cột kim loại, dây dẫn được coi như đã được nối đất qua ròng rọc, còn ở cột phi kim loại phải được nối đất riêng.",
        "d": "D. Phải nối đất dây dẫn trên tất cả các cột đang tiến hành kéo dây. Ở cột kim loại, dây dẫn được coi như đã được nối đất qua ròng rọc, còn ở cột phi kim loại, chưa có hệ thống nối đất thì ròng rọc phải được nối đất riêng.",
        "correct": "c"
    },
    {
        "q": "Câu 44: Theo Quy trình An toàn, quy định về trang bị phương tiện bảo vệ cá nhân khi làm việc trên đường dây hạ áp đang có điện như thế nào?",
        "a": "A. Khi làm việc với điện hạ áp đã cắt điện phải mang găng tay cách điện hạ áp",
        "b": "B. Khi làm việc với điện hạ áp trong TBA phải mang găng tay cách điện hạ áp",
        "c": "C. Khi làm việc với điện hạ áp trên đường dây hạ áp phải mang găng tay cách điện hạ áp",
        "d": "D. Làm việc với điện hạ áp đang có điện, chân phải đi giày, tay phải đeo găng cách điện hạ áp, quần áo bảo hộ phải khô ráo.",
        "correct": "d"
    },
    {
        "q": "Câu 45: Theo Quy trình An toàn, khi làm việc trên đường dây hạ áp có điện hoặc tiếp xúc trực tiếp với phần có điện hạ áp trong trạm điện phải thực hiện những quy định nào về PTBVCN ?",
        "a": "A. Phải đeo găng tay cách điện hạ áp; đi giày hoặc ủng cách điện hoặc đứng trên thảm cách điện.",
        "b": "B. Phải dùng dụng cụ cách điện có tay cầm chắc chắn và đảm bảo an toàn; đi giày hoặc ủng cách điện hoặc đứng trên thảm cách điện.",
        "c": "C. Phải sử dụng găng tay cách điện để cầm dụng cụ làm việc; đi giày hoặc ủng cách điện và đứng trên thảm cách điện.",
        "d": "D. Phải dùng dụng cụ có tay cầm chắc chắn; đi giày hoặc ủng cách điện hoặc đứng trên ghế cách điện.",
        "correct": "b"
    },
    {
        "q": "Câu 46: Theo Quy trình An toàn, khi thay sứ, căng lại dây, hạ dây, nâng dây trên những nhánh dây hạ áp đi vào các hộ phụ tải phải thực hiện các BPKTAT gì?",
        "a": "A. Phải cắt điện cả đường dây hạ áp đó và cắt cầu dao ở cuối nhánh rẽ đi vào các hộ.",
        "b": "B. Không phải cắt điện cả đường dây hạ áp đó, không phải tháo đầu dây đấu vào đường dây chính mà chỉ cần cắt cầu dao ở cuối nhánh rẽ đi vào các hộ.",
        "c": "C. Không phải cắt điện cả đường dây hạ áp đó mà chỉ phải cắt cầu dao ở cuối nhánh rẽ đi vào các hộ.",
        "d": "D. Không phải cắt điện cả đường dây hạ áp đó mà chỉ phải tháo đầu dây đấu vào đường dây chính và cắt cầu dao ở cuối nhánh rẽ đi vào các hộ.",
        "correct": "d"
    },
    {
        "q": "Câu 47: Theo Quy trình An toàn, quy định được phép làm việc trên đường dây hạ áp đi chung cột với đường dây cao áp có điện áp đến bao nhiêu ?",
        "a": "A. Làm việc trên đường dây hạ áp đi chung cột với đường dây cao áp đến 35 kV",
        "b": "B. Làm việc trên đường dây hạ áp đi chung cột với đường dây cao áp đến 10 kV",
        "c": "C. Làm việc trên đường dây hạ áp đi chung cột với đường dây cao áp đến 15 kV",
        "d": "D. Làm việc trên đường dây hạ áp đi chung cột với đường dây cao áp đến 22 kV",
        "correct": "a"
    },
    {
        "q": "Câu 48: Theo Quy trình An toàn, quy định được phép làm việc trên đường dây hạ áp đi chung cột với đường dây cao áp đến 35 kV như thế nào ?",
        "a": "A. Phải kiểm tra khoảng cách từ chỗ làm việc trên ĐDK hạ áp đến ĐDK cao áp đi chung cột đó đảm bảo an toàn mới tiến hành công việc.",
        "b": "B. Kiểm tra khoảng cách từ chỗ làm việc trên ĐDK hạ áp đến ĐDK cao áp đi chung cột đó đảm bảo an toàn; Khi căng lại dây, thay dây trên ĐDK chính dọc theo tuyến chỉ cần cắt điện ĐDK hạ áp.",
        "c": "C. Khi căng lại dây, thay dây trên ĐDK chính dọc theo tuyến chỉ cần cắt điện ĐDK hạ áp.",
        "d": "D. Phải kiểm tra khoảng cách từ chỗ làm việc trên ĐDK hạ áp đến ĐDK cao áp đi chung cột đó đảm bảo an toàn (cách nhau ít nhất 4,0 mét) mới tiến hành công việc.",
        "correct": "b"
    },
    {
        "q": "Câu 49: Theo Quy trình An toàn, quy định nào không đúng khi trèo lên hoặc xuống cột có đường dây hạ áp hoặc thông tin đi chung cột với đường dây hạ áp ?",
        "a": "A. Phải coi như các ĐD hạ áp hoặc thông tin này đang có điện,",
        "b": "B. Chân phải đi giày, tay phải đeo găng cách điện hạ áp, quần áo bảo hộ phải khô ráo, sử dụng dây an toàn 02 móc.",
        "c": "C. Khi vượt qua hoặc làm việc phải chú ý tránh va chạm phần hở của người vào ĐD hạ áp hoặc thông tin.",
        "d": "D. Trường hợp quần áo bị ẩm và có thể va chạm người với ĐD hạ áp hoặc thông tin thì phải dừng công việc, xuống cột ngay.",
        "correct": "d"
    },
    {
        "q": "Câu 50: Theo Quy trình An toàn, khi làm việc trên ĐDK hạ áp đang có điện cần phải thực hiện những BPAT gì ?",
        "a": "A. Chân phải đi giày, tay phải đeo găng cách điện hạ áp, quần áo bảo hộ phải khô ráo.",
        "b": "B. Nếu trên cột có nhiều ĐDK điện áp khác nhau thì phải có biển báo chỉ rõ điện áp từng ĐDK.",
        "c": "C. Khi tiến hành công việc, Người cấp phiếu/lệnh phải xác định rõ ĐDK sẽ tiến hành công việc thuộc trạm biến áp nào để làm đủ, đúng các biện pháp an toàn trước khi thực hiện việc cho phép làm việc.",
        "d": "D Tất cả các đáp án trên (dưới).",
        "correct": "d"
    },
    {
        "q": "Câu 51: Theo Quy trình An toàn, trong trường hợp không đảm bảo khoảng cách an toàn cho phép giữa đường dây cao áp và đường dây hạ áp sẽ thi công thì phải thực hiện BPKTAT gì ?",
        "a": "A. Cắt điện đường dây hạ áp. Đường dây cao áp đi phía trên đường dây hạ áp không phải cắt điện.",
        "b": "B. Cắt điện cả 02 đường dây cao áp và hạ áp. Đường dây cao áp đã được cắt điện phải đặt dây nối đất để đảm bảo an toàn.",
        "c": "C. Cắt điện cả 02 đường dây cao áp và hạ áp. Đường dây cao áp, hạ áp đã được cắt điện không cần phải đặt dây nối đất để đảm bảo an toàn.",
        "d": "D. Cắt điện đường dây cao áp. Đường dây cao áp đã được cắt điện phải đặt dây nối đất để đảm bảo an toàn.",
        "correct": "b"
    },
    {
        "q": "Câu 52: Theo Quy trình An toàn, các cờ báo hiệu “màu vàng” và “màu đỏ” treo tại tại đâu ?",
        "a": "A. Cờ báo hiệu “màu đỏ” treo tại phía đường dây đã nối đất. Cờ báo hiệu “màu vàng” treo tại phía đường dây có điện.",
        "b": "B. Cờ báo hiệu “màu xanh” treo tại phía đường dây đã nối đất. Cờ báo hiệu “màu đỏ” treo tại phía đường dây có điện.",
        "c": "C. Cờ báo hiệu “màu vàng” treo tại phía đường dây đã nối đất. Cờ báo hiệu “màu xanh” treo tại phía đường dây có điện.",
        "d": "D. Cờ báo hiệu “màu vàng” treo tại phía đường dây đã nối đất. Cờ báo hiệu “màu đỏ” treo tại phía đường dây có điện.",
        "correct": "d"
    },
    {
        "q": "Câu 53: Theo Quy trình An toàn, nhân viên đơn vị công tác sử dụng các trang bị, dụng cụ cho làm việc có điện cao áp hoặc di chuyển các dụng cụ hoặc chi tiết bằng kim loại lên cột thì ?",
        "a": "A. Phải đảm bảo khoảng cách an toàn điện không rào chắn đối với các phần có điện xung quanh khác (nếu chưa được bọc cách điện) phải bảo đảm theo quy định đối với điện áp đến 35kV là 1,0 mét, 110kV là 1,5 mét.",
        "b": "B. Phải đảm bảo khoảng cách cho phép nhỏ nhất đối với các phần có điện xung quanh khác (nếu chưa được bọc cách điện) phải bảo đảm theo quy định đối với điện áp đến 35kV là 0,6 mét, 110kV là 1,0 mét.",
        "c": "C. Phải đảm bảo khoảng cách an toàn phóng điện đối với các phần có điện xung quanh khác (nếu chưa được bọc cách điện) phải bảo đảm theo quy định đối với điện áp đến 35kV là 4,0 mét, 110kV là 6,0 mét.",
        "d": "D. Phải đảm bảo khoảng cách an toàn điện có rào chắn đối với các phần có điện xung quanh khác (nếu chưa được bọc cách điện) phải bảo đảm theo quy định đối với điện áp đến 35kV là 0,6 mét, 110kV là 1,5 mét.",
        "correct": "b"
    },
    {
        "q": "Câu 54: Theo Quy trình An toàn, quy định điều kiện về nước khi vệ sinh cách điện ĐDK cao áp khi đang vận hành như thế nào ?",
        "a": "A. Nghiêm cấm sử dụng nước chưa đạt tiêu chuẩn về cách điện để vệ sinh cách điện hotline.",
        "b": "B. Chất lượng nước, áp lực nước phải đảm bảo theo quy trình. Nghiêm cấm sử dụng nước thường lấy từ các vòi nước công cộng để sử dụng.",
        "c": "C. Chất lượng nước, áp lực nước phải đảm bảo theo quy trình. Nghiêm cấm sử dụng nước chưa đạt tiêu chuẩn về cách điện để vệ sinh cách điện hotline.",
        "d": "D. Chất lượng nước, áp lực nước phải đảm bảo theo quy trình và phải đo kiểm tra ngay sau khi thi công.",
        "correct": "c"
    },
    {
        "q": "Câu 55: Theo Quy trình An toàn, quy định về thời tiết khi vệ sinh cách điện ĐDK cao áp khi đang vận hành, nội dung nào không đúng (không phù hợp) ?",
        "a": "A. Chỉ được phép thực hiện công việc trong điều kiện thời tiết bình thường;",
        "b": "B. Cấm thực hiện công việc khi có gió cấp 4 trở lên, khi có mưa phùn, mưa giông, sấm sét, sương mù hoặc độ ẩm không khí không đảm bảo an toàn theo quy trình.",
        "c": "C. Khi đang công tác mà nhận thấy có khả năng mưa giông, sấm sét thì phải dừng ngay công việc và rút khỏi hiện trường.",
        "d": "D. Cấm thực hiện công việc khi có gió cấp 6 trở lên, khi có mưa phùn, mưa giông, sấm sét, sương mù tùy theo điều kiện thực tế, người CHTT quyết định dừng công việc.",
        "correct": "b"
    },
    {
        "q": "Câu 56: Theo Quy trình An toàn, nội dung nhận diện mối nguy khi làm việc với thiết bị nâng ?",
        "a": "A. Điện giật, va đập trong quá trình nâng, di chuyển; Đổ, lật, nghiêng thiết bị nâng.",
        "b": "B. Vật nặng rơi, va đập trong quá trình nâng, di chuyển; Tai nạn giao thông.",
        "c": "C. Đuối nước, va đập trong quá trình nâng, di chuyển; Đổ, lật, nghiêng thiết bị nâng.",
        "d": "D. Vật nặng rơi, va đập trong quá trình nâng, di chuyển; Đổ, lật, nghiêng thiết bị nâng.",
        "correct": "d"
    },
    {
        "q": "Câu 57: Theo Quy trình An toàn, giải pháp an toàn khi dùng hai hoặc nhiều thiết bị nâng để cùng nâng một tải trọng là ?",
        "a": "A. Phải có sơ đồ buộc móc tải, sơ đồ di chuyển tải và chỉ rõ trình tự thực hiện các thao tác, yêu cầu về kích thước, vật liệu, công nghệ, các thiết bị phụ trợ.",
        "b": "B. Phải có Phương án di chuyển tải và chỉ rõ trình tự thực hiện các thao tác, yêu cầu về kích thước, vật liệu, công nghệ, các thiết bị phụ trợ.",
        "c": "C. Phải có hồ sơ lý lịch thiết bị nâng đầy đủ khi di chuyển tải và chỉ rõ trình tự thực hiện các thao tác, yêu cầu về kích thước, vật liệu, công nghệ, các thiết bị phụ trợ.",
        "d": "D. Các thiết bị nâng phải còn hạn thử nghiệm, lập kế hoạch thi công, chỉ rõ trình tự thực hiện các thao tác, yêu cầu về kích thước, vật liệu, công nghệ, các thiết bị phụ trợ.",
        "correct": "a"
    },
    {
        "q": "Câu 58: Theo Quy trình An toàn, khi vận hành thiết bị nâng, quy định cấm như thế nào?",
        "a": "A. Cấm người đứng dưới hoặc giữa tải và chướng ngại vật, trừ đứng dưới độ vươn của cần trục,. Cấm nâng hạ tải trên thùng xe khi có người đang đứng trên thùng xe.",
        "b": "B. Cấm người đứng dưới hoặc giữa tải và chướng ngại vật, bao gồm cả độ vươn của cần trục, trong bán kính quay của thiết bị nâng. Cấm nâng hạ tải trên thùng xe khi có người đang đứng trên thùng xe.",
        "c": "C. Cấm người đứng dưới độ vươn của cần trục, trong bán kính quay của thiết bị nâng khi dây chằng bị đứt. Cấm nâng hạ tải trên thùng xe khi có người đang đứng trên thùng xe.",
        "d": "D. Cấm người đứng dưới hoặc giữa tải và chướng ngại vật, bao gồm cả độ vươn của cần trục,. Cấm nâng hạ tải trên thùng xe khi không có người đang đứng trên thùng xe.",
        "correct": "b"
    },
    {
        "q": "Câu 59: Theo Quy trình An toàn, thủ tục an toàn trước khi tiến hành công việc có sử dụng thiết bị nâng là gì?",
        "a": "A. Tiến hành lập phương án thi công, phương án đảm bảo an toàn trong quá trình làm việc. Kiểm tra chất lượng thiết bị nâng.",
        "b": "B. Tiến hành đánh giá rủi ro các công việc nâng, hạ và lập phương án đảm bảo an toàn trong quá trình làm việc.",
        "c": "C. Tiến hành đánh giá rủi ro các công việc nâng, hạ và lập phương án thi công, phương án đảm bảo an toàn trong quá trình làm việc.",
        "d": "D. Kiểm tra hồ sơ thiết bị nâng và lập phương án phương án thi công, phương án đảm bảo an toàn trong quá trình làm việc.",
        "correct": "c"
    },
    {
        "q": "Câu 60: Theo Quy trình An toàn, trong quá trình sử dụng xe cẩu, cầu trục, cần trục bánh lốp, nội dung nào không đúng (không phù hợp) quy định?",
        "a": "A. Không cho phép người lên, xuống cầu trục, cần trục khi thiết bị đang hoạt động; Vừa dùng người đẩy hoặc kéo tải vừa cho cơ cấu nâng/hạ tải; Nâng, hạ và chuyển tải khi có người đứng ở trên tải.",
        "b": "B. Không cho phép nâng tải có khối lượng vượt quá tải trọng cho phép; Để tải treo lơ lửng mà không có người điều khiển; Nâng tải trong tình trạng tải chưa ổn định hoặc chỉ móc một bên của móc kép;",
        "c": "C. Không được nâng tải vùi dưới đất, bị các vật khác đè lên, bị liên kết bằng bu lông hoặc bê tông với các vật khác; Cẩu với, kéo lê tải trọng;",
        "d": "D. Không cho phép thực hiện công việc khi chưa cắt điện các đường dây, thiết bị điện xung quanh nơi làm việc.",
        "correct": "d"
    },
    {
        "q": "Câu 61: Theo Quy trình An toàn, trong quá trình sử dụng xe cẩu, cầu trục, cần trục bánh lốp, quy định các nội dung cấm như thế nào?",
        "a": "A. Cấm người không phận sự đi trong hành lang an toàn thiết bị đang hoạt động; Cấm sử dụng thiết bị nâng tải để nâng người.",
        "b": "B. Cấm người không phận sự đi trong hành lang an toàn thiết bị đang hoạt động; Cấm sử dụng thiết bị nâng tải để nâng người quá tải trọng cho phép của thiết bị.",
        "c": "C. Cấm người không phận sự đi trong hành lang an toàn khi thiết bị ngừng hoạt động; Cấm sử dụng thiết bị nâng tải để nâng người.",
        "d": "D. Cấm các phương tiện không phận sự đi trong hành lang an toàn thiết bị đang hoạt động; Cấm sử dụng thiết bị nâng tải để nâng người.",
        "correct": "d"
    },
    {
        "q": "Câu 62: Theo Quy trình An toàn, chỉ được phép hạ tải xuống vị trí đã định với điều kiện nào?",
        "a": "A. Nơi đó đã tháo bỏ dây treo các kết cấu, bộ phận lắp ráp khỏi móc, khi các kết cấu và bộ phận đó đã được cố định chắc chắn và ổn định.",
        "b": "B. Nơi đó đã được loại trừ được khả năng rơi, đổ hoặc trượt khi các kết cấu và bộ phận đó đã được cố định chắc chắn và ổn định.",
        "c": "C. Nơi đó đã được loại trừ được khả năng rơi, đổ hoặc trượt; Đã tháo bỏ dây treo các kết cấu, bộ phận lắp ráp khỏi móc, khi các kết cấu và bộ phận đó đã được cố định chắc chắn và ổn định.",
        "d": "D. Có phương án loại trừ được khả năng rơi, đổ hoặc trượt; tháo bỏ dây treo các kết cấu, bộ phận lắp ráp khỏi móc, khi các kết cấu và bộ phận đó đã được cố định chắc chắn và ổn định.",
        "correct": "c"
    },
    {
        "q": "Câu 63: Theo Quy trình An toàn, người buộc móc tải chỉ được phép đến gần tải khi nào?",
        "a": "A. Khi tải đã hạ đến độ cao không lớn hơn 0,5 m tính từ mặt sàn chỗ người móc tải đứng.",
        "b": "B. Khi tải đã hạ đến độ cao không lớn hơn 1,5 m tính từ mặt sàn chỗ người móc tải đứng.",
        "c": "C. Khi tải đã hạ đến độ cao không lớn hơn 02 m tính từ mặt sàn chỗ người móc tải đứng.",
        "d": "D. Khi tải đã hạ đến độ cao không lớn hơn 01 m tính từ mặt sàn chỗ người móc tải đứng.",
        "correct": "d"
    },
    {
        "q": "Câu 64: Theo Quy trình An toàn, phải ngừng hoạt động của cầu trục, cần trục khi nào?",
        "a": "A. Khi phát hiện các vết nứt ở những chỗ quan trọng của kết cấu kim loại, biến dạng dư của kết cấu kim loại; Phanh của bất kỳ một cơ cấu nào bị hỏng; Móc, cáp, ròng rọc, tang bị mòn, bị rạn nứt.",
        "b": "B. Khi phát hiện các vết nứt ở những chỗ quan trọng của kết cấu kim loại, biến dạng dư của kết cấu kim loại; Phanh của bất kỳ một cơ cấu nào bị hỏng; thiết bị không còn hạnh định thử nghiệm.",
        "c": "C. Khi không phát hiện các vết nứt ở những chỗ quan trọng của kết cấu kim loại, biến dạng dư của kết cấu kim loại; Phanh, móc, cáp, ròng rọc, tang bị mòn, bị rạn nứt.",
        "d": "D. Khi phát hiện các nguy hiểm tại buồng điều khiển thiết bị; Phanh của bất kỳ một cơ cấu nào bị hỏng; Móc, cáp, ròng rọc, tang bị mòn, bị rạn nứt.",
        "correct": "a"
    },
    {
        "q": "Câu 65: Theo Quy trình An toàn, việc quản lý xe cẩu, cầu trục, cần trục như thế nào?",
        "a": "A. Cử người theo dõi sửa chữa, thay thế các chi tiết, bộ phận đã bị hư hỏng, mòn quá quy định cho phép.",
        "b": "B. Phải có sổ để theo dõi bảo dưỡng định kỳ; theo dõi sửa chữa, thay thế các chi tiết, bộ phận đã bị hư hỏng, mòn quá quy định cho phép.",
        "c": "C. Phải có sổ để theo dõi mức tiêu hao nhiên liệu và kiểm tra các chi tiết, bộ phận đã bị hư hỏng, mòn quá quy định cho phép.",
        "d": "D. Quản đốc phân xường xe phải theo dõi sửa chữa, thay thế các chi tiết, bộ phận đã bị hư hỏng, mòn quá quy định cho phép.",
        "correct": "b"
    },
    {
        "q": "Câu 66: Theo Quy trình An toàn, quy định tốc độ vận hành xe nâng hàng như thế nào?",
        "a": "A. Trong phạm vi công trường xe phải chạy với tốc độ ≤ 15km/h; Khi chạy trên đường thẳng trong kho ≤ 12km/h; Qua quãng đường ngoặt hoặc vòng phải chạy với tốc độ ≤ 5km/h.",
        "b": "B. Trong phạm vi công trường xe phải chạy với tốc độ ≤ 5km/h; Khi chạy trên đường thẳng trong kho ≤ 3km/h; Qua quãng đường ngoặt hoặc vòng phải chạy với tốc độ ≤ 5km/h.",
        "c": "C. Trong phạm vi công trường xe phải chạy với tốc độ ≤ 10km/h; Khi chạy trên đường thẳng trong kho ≤ 6km/h; Qua quãng đường ngoặt hoặc vòng phải chạy với tốc độ ≤ 5km/h.",
        "d": "D. Trong phạm vi công trường xe phải chạy với tốc độ ≤ 20km/h; Khi chạy trên đường thẳng trong kho ≤ 10km/h; Qua quãng đường ngoặt hoặc vòng phải chạy với tốc độ ≤15km/h.",
        "correct": "c"
    },
    {
        "q": "Câu 67: Theo Quy trình An toàn, trong các điều cấm sau đây, điều cấm nào không đúng khi sử dụng xe nâng hàng?",
        "a": "A. Cấm sử dụng xe nâng hàng để nâng người lên cao hoặc chở người.Hạ thấp càng nâng khi di chuyển; Đứng hoặc làm việc trước hoặc dưới càng nâng khi xe đang vận hành;",
        "b": "B. Cấm nâng các kiện hàng phía dưới không có kẽ hở cần thiết để đưa càng nâng vào lấy hàng, xếp hàng lên đống không có tấm kê để rút càng ra.",
        "c": "C. Cấm nâng hàng đi vào nơi có nền không ổn định; Nâng các kiện hàng phía dưới không có kẽ hở cần thiết để đưa càng nâng vào lấy hàng; Xếp hàng lên đống không có tấm kê để rút càng ra.",
        "d": "D. Cấm vận hành xe nâng hàng khi chưa chằng buộc chắc chắn và không có người giữ thăng bằng cho hàng cần nâng.",
        "correct": "d"
    },
    {
        "q": "Câu 68: Theo Quy trình An toàn, quy định về trọng lượng của hàng nâng như thế nào?",
        "a": "A. Phải được phân bố đều trên hai càng nâng và phần nhô ra ở phía trước không được vượt quá 1/3 độ dài của càng nâng.",
        "b": "B. Phải được phân bố đều trên hai càng nâng và phần nhô ra ở phía trước không được vượt quá 1/2 độ dài của càng nâng.",
        "c": "C. Phải được phân bố đều trên hai càng nâng và phần nhô ra ở phía trước không được vượt quá 1/4 độ dài của càng nâng.",
        "d": "D. Phải được phân bố đều trên hai càng nâng và phần nhô ra ở phía trước không được vượt quá 2/3 độ dài của càng nâng.",
        "correct": "a"
    },
    {
        "q": "Câu 69: Theo Quy trình An toàn, khi sử dụng xe nâng hàng có lắp thêm cần để nâng và di chuyển, phải thực hiện động tác nào?",
        "a": "A. Không được nhấc bổng hàng lên rồi mới di chuyển. Khi di chuyển phải có biện pháp chống hàng lắc lư. Cấm kéo hoặc đẩy hàng trên đống xuống.",
        "b": "B. Phải nhấc bổng hàng lên rồi mới di chuyển. Khi di chuyển phải có biện pháp chống hàng lắc lư. Cấm kéo hoặc đẩy hàng trên đống xuống.",
        "c": "C. Phải nhấc bổng hàng lên rồi mới di chuyển. Khi chưa di chuyển phải có biện pháp chống hàng lắc lư. Cấm kéo hoặc đẩy hàng trên đống xuống.",
        "d": "D. Khi di chuyển phải có biện pháp chống hàng lắc lư. Cho phép kéo hoặc đẩy hàng trên đống xuống với điều kiện phải có kê lót đảm bảo an toàn.",
        "correct": "b"
    },
    {
        "q": "Câu 70: Theo Quy trình An toàn, xe nâng chỉ được di chuyển khi nào?",
        "a": "A. Khung xe nghiêng hết về phía trước và cơ cấu nâng hàng đã được nâng lên cách mặt đất ít nhất bằng độ lớn của gầm xe với đường.",
        "b": "B. Khung xe nghiêng hết về phía sau và cơ cấu nâng hàng đã được nâng lên cách mặt đất ít nhất bằng độ lớn của thành xe với đường.",
        "c": "C. Khung xe nghiêng hết về phía sau và cơ cấu nâng hàng đã được nâng lên cách mặt đất ít nhất bằng độ lớn của gầm xe với đường.",
        "d": "D. Khung xe nghiêng hết về phía sau và cơ cấu nâng hàng đã được nâng lên cách mặt đất ít nhất 01 mét",
        "correct": "c"
    },
    {
        "q": "Câu 71: Theo Quy trình An toàn, quy định về quản lý xe nâng hàng như thế nào?",
        "a": "A. Mỗi chủng loại xe nâng hàng phải có quy trình vận hành an toàn; Có sổ theo dõi quá trình bảo trì, bảo dưỡng, sửa chữa định kỳ.",
        "b": "B. Mỗi xe nâng hàng phải có quy trình vận hành an toàn; cử người theo dõi quá trình bảo trì, bảo dưỡng, sửa chữa định kỳ.",
        "c": "C. Mỗi xe nâng hàng phải có quy trình vận hành an toàn; hàng ngày người vận hành xe phải theo dõi quá trình bảo trì, bảo dưỡng, sửa chữa định kỳ.",
        "d": "D. Mỗi xe nâng hàng phải có quy trình vận hành an toàn; Có sổ theo dõi quá trình bảo trì, bảo dưỡng, sửa chữa định kỳ.",
        "correct": "d"
    },
    {
        "q": "Câu 72: Theo Quy trình An toàn, khi vận hành xe nâng người, điều cấm nào đúng?",
        "a": "A. Cấm vận hành nơi có các phương tiện di động khác đang làm việc; Cấm rời khỏi sàn thao tác; Cấm sử dụng xe nâng người sai mục đích và chở người khi tiến hành di chuyển/tham gia giao thông.",
        "b": "B. Cấm vận hành nơi có các phương tiện di động khác đang làm việc; Cấm đứng trên sàn thao tác khi xe đang nâng; Cấm sử dụng xe nâng người sai mục đích.",
        "c": "C. Cấm rời khỏi sàn thao tác; Cấm sử dụng xe nâng người sai mục đích và chở người khi tiến hành di chuyển/tham gia giao thông.",
        "d": "D. Cấm vận hành nơi có các phương tiện di động khác đang làm việc; Cấm rời khỏi sàn thao tác; Cấm chở người khi tiến hành di chuyển/tham gia giao thông.",
        "correct": "a"
    },
    {
        "q": "Câu 73: Theo Quy trình An toàn, quy định về quản lý xe nâng người như thế nào?",
        "a": "A. Đơn vị sử dụng phải lập sổ theo dõi tình trạng của xe, nhật trình sử dụng.",
        "b": "B. Đơn vị sử dụng phải lập nhật ký theo dõi tình trạng của xe, nhật trình sử dụng.",
        "c": "C. Đơn vị sử dụng phải cử người theo dõi tình trạng của xe, nhật trình sử dụng.",
        "d": "D. Đơn vị sử dụng phải lập nhật ký theo dõi tình trạng sự cố của xe.",
        "correct": "b"
    },
    {
        "q": "Câu 74: Theo Quy trình An toàn, quy định những nội dung kiểm tra trước khi sử dụng pa lăng xích kéo tay thì nội dung nào không đúng (không phù hợp)?",
        "a": "A. Pa lăng còn đang trong thời hạn kiểm định;",
        "b": "B. Trục, cóc hãm, dây xích, móc phải đảm bảo an toàn mới cho phép sử dụng;",
        "c": "C. Vị trí treo pa lăng phải rộng rãi, không gần đường giao thông và đô thị.",
        "d": "D. Vật cần nâng phù hợp với tải trọng cho phép của pa lăng; Vị trí treo pa lăng phải chắc chắn, chịu được toàn bộ tải trọng.",
        "correct": "c"
    },
    {
        "q": "Câu 75: Theo Quy trình An toàn, quy định kiểm tra tải trọng khi sử dụng pa lăng xích kéo tay như thế nào?",
        "a": "A. Khi nâng tải trọng lên vị trí khoảng 10cm phải dừng lại để kiểm tra an toàn mới được nâng tiếp;",
        "b": "B. Khi nâng tải trọng lên vị trí khoảng 30cm phải dừng lại để kiểm tra an toàn mới được nâng tiếp;",
        "c": "C. Khi nâng tải trọng lên vị trí khoảng 50cm phải dừng lại để kiểm tra an toàn mới được nâng tiếp;",
        "d": "D. Khi nâng tải trọng lên vị trí khoảng 20cm phải dừng lại để kiểm tra an toàn mới được nâng tiếp;",
        "correct": "d"
    },
    {
        "q": "Câu 76: Theo Quy trình An toàn, điều cấm nào không đúng trong quy định khi sử dụng pa lăng xích kéo tay?",
        "a": "A. Cấm kiểm tra an toàn khi bắt đầu nâng tải trọng lên.",
        "b": "B. Cấm để dây xích bị xoắn hay thắt nút, vận hành pa lăng khi chốt móc bị hỏng;",
        "c": "C. Cấm treo vật nặng lơ lửng trên pa lăng khi không có người giám sát; Cấm dùng xích của pa lăng để quàng vào vật cần nâng;",
        "d": "D. Nâng tải trọng lớn hơn giá trị cho phép của pa lăng; Để người đứng dưới tải trọng",
        "correct": "a"
    },
    {
        "q": "Câu 77: Theo Quy trình An toàn, quy định khi sử dụng xích kéo tay như thế nào?",
        "a": "A. Khi dây xích khi bị đứt không được nối mà phải thay thế bằng xích mới.",
        "b": "B. Không được tự chế, lắp động cơ điện để điều khiển pa lăng xích; Không được kéo quá nhanh vì sẽ làm cho tải trọng bị lắc trong quá trình nâng hạ.",
        "c": "C. Không dùng xích của pa lăng để quàng vào vật cần nâng.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng.",
        "correct": "d"
    },
    {
        "q": "Câu 78: Theo Quy trình An toàn, nội dung cơ bản nhận diện mối nguy khi hàn điện, hàn hơi là ?",
        "a": "A. Điện giật do chạm, chập vào các bộ phận dẫn điện; Tai nạn giao thông; Khí, bụi độc hại; Bỏng do hạt kim loại nóng chảy, kim loại có nhiệt độ cao; Bỏng lạnh",
        "b": "B. Bức xạ có hại do hồ quang điện; Khí, bụi độc hại; Bỏng do hạt kim loại nóng chảy, kim loại có nhiệt độ cao; Bỏng lạnh; Cháy, nổ; Khói bụi.",
        "c": "C. Điện giật do chạm mỏ hàn; Bức xạ có hại do hồ quang điện; Khí, bụi độc hại; Bỏng lạnh; Cháy, nổ.",
        "d": "D. Điện giật do rò, chạm, chập vào các bộ phận dẫn điện; Bức xạ có hại do hồ quang điện; Khí, bụi độc hại; Bỏng do hạt kim loại nóng chảy, kim loại có nhiệt độ cao; Cháy, nổ.",
        "correct": "d"
    },
    {
        "q": "Câu 79: Theo Quy trình An toàn, đối với những người được phép tiến hành công tác hàn, điều kiện nào không đúng (không cần thiết)?",
        "a": "A. Được đào tạo về chuyên môn về phóng chống thiên tai và cứu nạn cứu hộ.",
        "b": "B. Được huấn luyện, bồi dưỡng nghiệp vụ phòng cháy chữa cháy và được cấp giấy chứng nhận huấn luyện nghiệp vụ phòng cháy và chữa cháy.",
        "c": "C. Sử dụng đầy đủ các PTBVCN: mặt nạ có kính hàn, quần áo, mũ, găng tay bằng vật liệu khó cháy, cách điện và chịu được các tác động cơ học.",
        "d": "D. Được đào tạo về chuyên môn, có chứng chỉ hoặc do cơ sở đào tạo hợp pháp cấp; Được huấn luyện, kiểm tra sát hạch về quy trình kỹ thuật an toàn - bảo hộ lao động và có thẻ an toàn.",
        "correct": "a"
    },
    {
        "q": "Câu 80: Theo Quy trình An toàn, yêu cầu chung về thực hiện công tác hàn về khoảng cách an toàn như thế nào?",
        "a": "A. Bảo đảm khoảng cách an toàn theo quy định.",
        "b": "B. Khi hàn ở tầng trên, thì các tầng phía dưới (khi không có sàn chống cháy bảo vệ) phải dọn sạch các chất dễ cháy nổ trong bán kính không nhỏ hơn 5m.",
        "c": "C. Di chuyển vật tư thiết bị, hàng hóa dễ cháy hoặc che chắn không để vảy hàn rơi xuống tối thiểu 10m",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng.",
        "correct": "d"
    },
    {
        "q": "Câu 81: Theo Quy trình An toàn, khi hàn điện, hàn hơi, điều cấm nào không đúng (không phù hợp)?",
        "a": "A. Không được tiến hành đồng thời cả hàn hơi và hàn điện trong các thùng kín;",
        "b": "B. Cấm hàn khi có các chất dễ bắt lửa như xăng, axêton, spirit trắng ở gần vị trí hàn.",
        "c": "C. Cấm hàn ở khoảng cách dưới 5m so với vị trí để các chất dễ cháy nổ.",
        "d": "D. Cấm hàn ở khoảng cách dưới 10m so với vị trí để các chất dễ cháy nổ.",
        "correct": "d"
    },
    {
        "q": "Câu 82: Theo Quy trình An toàn, quy định về nối đất thiết bị hàn điện như thế nào?",
        "a": "A. Phải nối đất phần kim loại của máy hàn theo quy định trước khi thiết bị được nối vào nguồn.",
        "b": "B. Phải nối đất phần kim loại của thiết bị, vật được hàn điện cũng như các kết cấu và sản phẩm hàn theo quy định trước khi thiết bị được nối vào nguồn.",
        "c": "C. Phải nối đất phần kim loại của thiết bị được hàn điện cũng như các kết cấu và sản phẩm hàn và máy hàn theo quy định trước khi thiết bị được nối vào nguồn.",
        "d": "D. Không phải nối đất phần kim loại của thiết bị được hàn điện cũng như các kết cấu và sản phẩm hàn, chỉ nối đất máy hàn theo quy định trước khi thiết bị được nối vào nguồn.",
        "correct": "c"
    },
    {
        "q": "Câu 83: Theo Quy trình An toàn, quy định BPAT khi hàn điện ở nơi đông người cùng làm việc và người qua lại như thế nào?",
        "a": "A. Phải lập rào chắn để ngăn và bảo vệ những người xung quanh.",
        "b": "B. Phải có tấm chắn bằng vật liệu không cháy để ngăn và bảo vệ những người xung quanh.",
        "c": "C. Phải đặt biển “Cấm vào” để ngăn và bảo vệ những người xung quanh.",
        "d": "D. Phải đặt biển “Cấm lại gần” để ngăn và bảo vệ những người xung quanh.",
        "correct": "b"
    },
    {
        "q": "Câu 84: Theo Quy trình An toàn, quy định BPAT khi hàn điện ở trên cao, nội dung nào không đúng?",
        "a": "A. Hàn trên giàn giáo bằng gỗ, sàn của nó phải được phủ kín bằng tấm kim loại, các tông amiăng hay bằng những vật liệu khó cháy khác.",
        "b": "B. Hàn điện ở tầng trên phải có biện pháp bảo vệ những người làm việc ở tầng dưới khỏi bị các giọt kim loại, các mẩu que hàn cháy dở văng hoặc rơi trúng vào người hay các vật dễ cháy ở phía dưới.",
        "c": "C. Không cho phép hàn điện có bố trí 2 tầng; Phải có biện pháp bảo vệ khỏi bị các giọt kim loại, các mẩu que hàn cháy dở văng hoặc rơi trúng vào người hay các vật dễ cháy.",
        "d": "D. Hàn điện trên cao mà không có giàn giáo người thợ hàn nhất thiết phải dùng dây đai an toàn bền nhiệt, có túi đựng dụng cụ, điện cực và các vật cháy dở.",
        "correct": "c"
    },
    {
        "q": "Câu 85: Khi tiến hành công tác trên đường dây điện trên không vượt đường sắt, đường bộ, đường sông phải áp dụng các biện pháp nào sau đây?",
        "a": "A. Ý 1 - Giao chéo với đường sắt, đường sông phải báo trước cho cơ quan quản lý đường sắt, đường sông và mời đại diện của họ tới điểm công tác để phối hợp, đảm bảo an toàn cho hai bên và cộng đồng.",
        "b": "B. Ý 2 - Giao chéo với đường bộ phải cử Người cảnh giới cầm cờ đỏ (hoặc đèn đỏ nếu là ban đêm), đứng cách nơi làm việc với khoảng cách hợp lý về hai phía để báo hiệu. Nếu có nhiều xe qua lại thì phải bắc giàn giáo.",
        "c": "C. Ý 3 - Đơn vị công tác chỉ cần lập và duyệt phương án thi công đảm bảo an toàn không cần mời các đơn vị liên quan.",
        "d": "D. Cả Ý 1 và Ý 2 đều đúng.",
        "correct": "d"
    },
    {
        "q": "Câu 86: Có được sử dụng cưa máy và sào cách điện để cưa cây gần đường dây trên không không?",
        "a": "A. Ý 1 - Được phép, chặt cây là công việc đơn giản chỉ cần giao cho nhân viên vận hành, không cần Lệnh công tác, Phiếu công tác.",
        "b": "B. Ý 2 - Được phép, người thực hiện phải được huấn luyện thành thạo quy trình sử dụng cưa máy, sào cắt cây. Khi cưa cây phải có biện pháp tránh cưa rơi xuống đất gây nguy hiểm cho người bên dưới.",
        "c": "C. Ý 3 - Chỉ được sử dụng cưa máy, không cần huấn luyện quy trình sử dụng.",
        "d": "D. Cả Ý 1 và Ý 3 đều đúng.",
        "correct": "b"
    },
    {
        "q": "Câu 87: Cho phép leo lên cột của đường dây 110 kV đang vận hành để kiểm tra sứ, dây dẫn, dây chống sét, sơn xà… với điều kiện khoảng cách nằm ngang nhỏ nhất từ mép ngoài cùng của thân cột đến dây dẫn là bao nhiêu?",
        "a": "A. Bằng chiều cao người thực hiện.",
        "b": "B. 2,0 m.",
        "c": "C. 1,5 m.",
        "d": "D. Không quy định.",
        "correct": "c"
    },
    {
        "q": "Câu 88: Khi làm việc trên đường dây 22 kV đang vận hành, nhân viên đơn vị công tác sử dụng các trang bị, dụng cụ cho làm việc có điện, thì khoảng cách cho phép nhỏ nhất đối với thân thể của nhân viên đơn vị công tác đến dây dẫn điện phải đảm bảo?",
        "a": "A. 0,6 m.",
        "b": "B. 1,0 m.",
        "c": "C. 1,5 m.",
        "d": "D. Không quy định.",
        "correct": "a"
    },
    {
        "q": "Câu 89: Khi làm công việc tại đường dây cao áp đang vận hành, người có bậc 3 an toàn điện được phép làm việc một mình những công việc nào sau đây?",
        "a": "A. Công việc tháo dỡ cấu kiện cột.",
        "b": "B. Công việc tại móng cột, trèo lên cột dưới 2,0m, không tháo dỡ cấu kiện cột.",
        "c": "C. Công việc trèo lên cột trên 3,0 m.",
        "d": "D. Công việc tại thân cột và cách dây dẫn cuối cùng theo chiều thẳng đứng tối thiểu bằng khoảng cách quy định.",
        "correct": "b"
    },
    {
        "q": "Câu 90: Phối hợp an toàn nhiều đơn vị công tác khi làm việc trên đường dây dẫn điện đã cắt điện hoặc có điện ?",
        "a": "A. Phân biệt phạm vi làm việc của từng đơn vị, thực hiện các biện pháp an toàn riêng biệt.",
        "b": "B. Cử người làm Người lãnh đạo công việc, trao trả nơi làm việc, khóa phiếu, đóng điện.",
        "c": "C. Tuân thủ biện pháp an toàn khi làm việc trên cao.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "d"
    },
    {
        "q": "Câu 91: Khi sử dụng thiết bị, dụng cụ, phương tiện (trừ phương tiện phục vụ sửa chữa nóng) làm việc trong hành lang bảo vệ an toàn lưới điện cao áp trên 1 đến 35 kV phải đảm bảo khoảng cách an toàn phóng điện là bao nhiêu mét?",
        "a": "A. 2m",
        "b": "B. 3m",
        "c": "C. 4m",
        "d": "D. 5m",
        "correct": "a"
    },
    {
        "q": "Câu 92: Biện pháp an toàn nào sau đây khi chặt, tỉa cây vi phạm hành lang bảo vệ an toàn đường dây đang có điện là đúng?",
        "a": "A. Cấm chặt cây khi có gió cấp 3 trở lên.",
        "b": "B. Phải cắt điện đường dây điện trên không khi chặt cây, chặt cành có khả năng đổ, rơi vào đường dây điện trên không. Nếu không cắt điện thì phải có biện pháp để hạ cây, cành an toàn.",
        "c": "C. Người chưa huấn luyện và kiểm tra, nhưng có kinh nghiệm thì nên trực tiếp chặt cây.",
        "d": "D. Cưa cây sẵn hàng loạt rồi làm đổ cây bằng cách cho cây này làm đổ cây kia để tiết kiệm thời gian.",
        "correct": "b"
    },
    {
        "q": "Câu 93: Nhóm công tác được Đội phó phân công đi đo tiếp địa đường dây trung áp 22 kV đang vận hành có bảo vệ dây chống sét, trong điều kiện thời tiết khu vực thực hiện công việc đang có mưa. Nhóm công nhân phải làm gì?",
        "a": "A. Ý 1 - Khi tháo dây nối đất phải mang găng tay cách điện.",
        "b": "B. Ý 2 - Trước khi tháo dây nối đất phải được nối tắt tạm thời vào một cọc nối đất bằng một đoạn dây dẫn có tiết diện  tối thiểu 10 mm2.",
        "c": "C. Cả Ý 1 và Ý 2 đều đúng.",
        "d": "D. Ý 3 - Từ chối và giải thích lý do cho người phân công công việc.",
        "correct": "d"
    },
    {
        "q": "Câu 94: Đơn vị công tác làm việc trên đoạn đường dây điện trên không 22 kV đã cắt điện nhưng có chiều dài 2,1 km đi song song và cách đường dây điện trên không 220 kV đang vận hành 140 m. Trong trường hợp này, khoảng cách giữa 2 bộ tiếp địa xa nhất theo quy định là bao nhiêu?",
        "a": "A. 02 km.",
        "b": "B. Lớn hơn 500 m.",
        "c": "C. Không quy định",
        "d": "D. Nhỏ hơn hoặc bằng 500 m.",
        "correct": "d"
    },
    {
        "q": "Câu 95: Các công việc cho phép 01 người tiến hành làm công việc ở trên đường dây điện trên không cao áp đã cắt điện?",
        "a": "A. Cho phép tiến hành các công việc như treo (in) biển báo, sửa chân cột, đánh số cột,… mà không trèo lên cột cao quá 2,0 m và không sửa chữa các cấu kiện của cột.",
        "b": "B. Cho phép tiến hành các công việc mà không trèo lên cột cao quá 2,0 m.",
        "c": "C. Không được phép.",
        "d": "D. Cho phép tiến hành các công việc mà không sửa chữa các cấu kiện của cột.",
        "correct": "a"
    },
    {
        "q": "Câu 96: Làm việc với đường dây điện trên không khi có giông bão hoặc sắp có giông bão người chỉ huy trực tiếp phải?",
        "a": "A. Ý 1 - Yêu cầu nhân viên công tác khẩn trương tiến hành công việc để đảm bảo tiến độ.",
        "b": "B. Ý 2 - Phải cho Nhân viên đơn vị công tác ra khỏi khu vực nguy hiểm có thể xảy ra do đứt dây hoặc đổ, gẫy cột, lũ quét, lở đất.",
        "c": "C. Ý 3 - Tăng cường nhân lực từ các đội khác để hoàn thành công việc.",
        "d": "D. Cả Ý 1 và Ý 3 đều đúng.",
        "correct": "b"
    },
    {
        "q": "Câu 97: Các mối nguy hiểm khi làm việc trên đường dây cao áp được bố trí cắt điện theo phân đoạn, đi chung cột hoặc giao chéo với đường dây đang vận hành?",
        "a": "A. Điện giật do rò điện, cảm ứng, ngã cao tại các vị trí cột gây mất an toàn trong quá trình leo cao.",
        "b": "B. Phóng điện do vi phạm khoảng cách an toàn, khi tháo hay lắp dây dẫn thì phải đề phòng khả năng dây bật lên trên đường dây điện trên không có điện gây phóng điện.",
        "c": "C. Dây dẫn và dây chống sét sắp đưa lên cột phải được nối đất, nếu là đường dây điện trên không giao chéo thì phải nối đất ở hai phía chống giật điện do cảm ứng.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "d"
    },
    {
        "q": "Câu 98: Biện pháp an toàn khi kiểm tra đường dây đang vận hành nào sau đây là đúng?",
        "a": "A. Đi kiểm tra đường dây điện trên không, thiết bị điện bằng mắt thì được phép làm việc 01 người. Phải xem như đường dây điện trên không đang có điện, kiểm tra tiến hành trên mặt đất, ban đêm phải có đèn soi, chú ý dây dẫn bị chùng võng và đứt, rơi.",
        "b": "B. Khi thấy dây dẫn đứt, rơi xuống đất hoặc còn lơ lửng phải có biện pháp cấm cho mọi người tới gần dưới 10m, ngoại trừ bản thân.",
        "c": "C. Khi trèo lên cột không cần phải kiểm tra sơ bộ tình trạng của móng cột và cột. Cấm trèo phía đặt tay xà có sứ đỡ dây dẫn.",
        "d": "D. Được phép kiểm tra đường dây khi trười mưa to, giông sét.",
        "correct": "a"
    },
    {
        "q": "Câu 99: Biện pháp an toàn khi chặt, tỉa cây vi phạm hành lang bảo vệ an toàn đường dây đang có điện ?",
        "a": "A. Người chưa huấn luyện và kiểm tra, chưa có kinh nghiệm không trực tiếp chặt cây.",
        "b": "B. Người chỉ huy trực tiếp phải thông báo cho Nhân viên đơn vị công tác biết về nguy hiểm khi trèo lên cây, khi cây và dây thừng tiếp xúc hoặc vi phạm khoảng cách an toàn với dây dẫn.",
        "c": "C. Cấm chặt cây khi có gió cấp 4 trở lên. Cấm cưa cây sẵn hàng loạt rồi làm đổ cây bằng cách cho cây này làm đổ cây kia. Cấm đứng ở phía cây đổ và phía đối diện. Để tránh cây khỏi đổ vào đường dây điện trên không phải dùng dây thừng buộc và kéo về phía đối diện với đường dây điện trên không.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "d"
    },
    {
        "q": "Câu 100: Khi làm việc trên cột điện, hành vi nào sau đây là đúng?",
        "a": "A. Ý 1 - Cho phép không sử dụng dây đeo an toàn khi thời gian làm việc rất ngắn.",
        "b": "B. Ý 2 - Luôn luôn sử dụng dây đeo an toàn. Dây đeo an toàn phải mắc vào những vật cố định chắc chắn.",
        "c": "C. Ý 3 - Không sử dụng điện thoại di động trong quá trình lên hoặc xuống.",
        "d": "D. Cả Ý 2 và Ý 3 đều đúng.",
        "correct": "d"
    },
    {
        "q": "Câu 101: Khi công tác trên đường dây đã cắt điện phải tuân thủ điều nào?",
        "a": "A. Phải có nối đất tại nơi làm việc theo quy định theo Quy trình an toàn điện hiện hành.",
        "b": "B. Nếu làm việc vào ban đêm phải bố trí đủ ánh sáng.",
        "c": "C. Các công việc làm ở trên đường dây cao áp phải có ít nhất 2 người thực hiện.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "d"
    },
    {
        "q": "Câu 102: Cấm làm việc trên đường dây điện trên không khi?",
        "a": "A. Bắt đầu có gió cấp 5 trở lên hoặc có mưa nặng hạt, nước chảy thành dòng trên người và thiết bị điện.",
        "b": "B. Bắt đầu có gió cấp 6 trở lên hoặc có mưa nặng hạt, nước chảy thành dòng trên người và thiết bị điện.",
        "c": "C. Bắt đầu có gió cấp 4 trở lên hoặc có mưa nặng hạt, nước chảy thành dòng trên người và thiết bị điện.",
        "d": "D. Bắt đầu có gió cấp 3 hoặc có mưa nặng hạt, nước chảy thành dòng trên người và thiết bị điện.",
        "correct": "b"
    },
    {
        "q": "Câu 103: Cấm chặt (cưa) cây ở gần đường dây điện trên không  khi có gió?",
        "a": "A. Gió cấp 5 trở lên.",
        "b": "B. Gió cấp 6 trở lên.",
        "c": "C. Gió cấp 4 trở lên.",
        "d": "D. Gió cấp 3 trở lên.",
        "correct": "c"
    },
    {
        "q": "Câu 104: Trước khi trèo lên giá đỡ, cột; nhân viên đơn vị công tác phải kiểm tra sơ bộ nội dung nào?",
        "a": "A. Tình trạng của bệ đỡ, giá đỡ, cột.",
        "b": "B. Vị trí của giá đỡ và đường trèo lên an toàn, kết cấu hoặc dây dẫn trên cột.",
        "c": "C. Xác định các trang thiết bị an toàn, bảo hộ lao động cần thiết.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "d"
    },
    {
        "q": "Câu 105: Đối với đường dây 22 kV (dây trần) thì chiều rộng hành lang được giới hạn bởi hai mặt thẳng đứng về hai phía của đường dây, song song với đường dây, có khoảng cách từ dây ngoài cùng về mỗi phía khi dây ở trạng thái tĩnh là bao nhiêu?",
        "a": "A. 2m",
        "b": "B. 2,5m",
        "c": "C. 3m",
        "d": "D. 3,5m",
        "correct": "a"
    },
    {
        "q": "Câu 106: Đối với công trình lưới điện cấp điện áp đến 35 kV, chiều cao hành lang được tính từ đáy móng cột đến điểm cao nhất của công trình cộng thêm khoảng cách an toàn theo chiều thẳng đứng là bao nhiêu?",
        "a": "A. 1m",
        "b": "B. 1,5m",
        "c": "C. 2m",
        "d": "D. 2,5m",
        "correct": "c"
    },
    {
        "q": "Câu 107: Đối với công trình lưới điện cấp điện áp đến 110 kV, chiều cao hành lang được tính từ đáy móng cột đến điểm cao nhất của công trình cộng thêm khoảng cách an toàn theo chiều thẳng đứng là bao nhiêu?",
        "a": "A. 1,5m",
        "b": "B. 2m",
        "c": "C. 2,5m",
        "d": "D. 3m",
        "correct": "d"
    },
    {
        "q": "Câu 108: Đối với đường dây dẫn điện có điện áp đến 35 kV (dây trần) trong thành phố, thị xã, thị trấn thì khoảng cách từ điểm bất kỳ của cây đến dây dẫn điện ở trạng thái võng cực đại không nhỏ hơn bao nhiêu?",
        "a": "A. 1m",
        "b": "B. 1,5m",
        "c": "C. 2m",
        "d": "D. 2,5m",
        "correct": "b"
    },
    {
        "q": "Câu 109: Trường hợp cây ở ngoài hành lang bảo vệ an toàn đường dây dẫn điện 22 kV trên không và ngoài thành phố, thị xã, thị trấn thì khoảng cách từ bộ phận bất kỳ của cây khi cây bị đổ đến bộ phận bất kỳ của đường dây không nhỏ hơn khoảng cách bao nhiêu?",
        "a": "A. 0,7m",
        "b": "B. 1m",
        "c": "C. 1,5m",
        "d": "D. 0,6m",
        "correct": "a"
    },
    {
        "q": "Câu 110: Để đảm bảo thực hiện khối lượng thay sứ trong một công tác có cắt điện đường dây, do tổ đường dây thiếu nhân lực, lãnh đạo Đội QLĐLKV đã điều động nhân lực tổ khác (không có nghiệp vụ về đường dây) tham gia công tác thay sứ trong ngày hôm đó. Theo anh/ chị việc điều động này như thế nào?",
        "a": "A. Ý 1 - Việc điều động này là phù hợp, đảm bảo tiến độ công việc, hạn chế thời gian mất điện.",
        "b": "B. Ý 2 - Việc điều động này có thể cho phép, với yêu cầu phải quy định các phạm vi công việc của nhân viên được điều động, ghi rõ trong phương án thi công được lãnh đạo đơn vị phê duyệt.",
        "c": "C. Ý 3 - Việc điều động này của lãnh đạo Đội QLĐLKV đã vi phạm điều nghiêm cấm giao nhiệm vụ cho người chưa được học tập - huấn luyện, sát hạch về chuyên môn nghiệp vụ của nghề đường dây.",
        "d": "D. Cả Ý 1 và Ý 2 đều đúng.",
        "correct": "c"
    },
    {
        "q": "Câu 111: Trên đường về nhà sau khi kết thúc công việc, công nhân A phát hiện có sự cố do tiếp xúc xấu, gây phóng điện chập chờn trên lưới điện hạ thế của một trạm biến áp nằm trong khu vực của mình quản lý, công nhân A phải xử lý như thế nào?",
        "a": "A. Ý 1 - Lập tức leo lên cột để xử lý hiện tượng tiếp xúc xấu, đảm bảo cấp điện cho khách hàng.",
        "b": "B. Ý 2 - Thông báo tình hình sự cố với trực ban Đội QLĐLKV. Chỉ được tham gia xử lý sự cố nếu được lãnh đạo đơn vị giao nhiệm vụ và có Phiếu công tác/Lệnh công tác.",
        "c": "C. Ý 3 - Lập tức cắt trạm biến áp đang cấp điện khu vực đó, thông báo tình hình với trực ban đơn vị.",
        "d": "D. Thực hiện theo Ý 2 hoặc Ý 3.",
        "correct": "b"
    },
    {
        "q": "Câu 112: Khi đứng trên cột để thao tác tiếp địa lưu động với điện áp cao, người thực hiện phải sử dụng dụng cụ an toàn gì để thực hiện?",
        "a": "A. Găng tay cách điện và ủng cách điện đúng cấp điện áp.",
        "b": "B. Găng tay cách điện và Sào cách điện đúng cấp điện áp.",
        "c": "C. Găng tay cách điện, ủng cách điện và Sào cách điện đúng cấp điện áp.",
        "d": "D. Ủng cách điện và Sào cách điện đúng cấp điện áp.",
        "correct": "b"
    },
    {
        "q": "Câu 113: Công nhân A khi trèo lên cột điện bị vướng nhiều dây cáp viễn thông đi chung cột, công nhân A đã tháo dây choàng để xoay người thì bị trượt chân ngã cao. Qua tình huống này vi phạm nào là nguyên nhân trực tiếp dẫn đến tai nạn?",
        "a": "A. Không dùng thang để trèo cột.",
        "b": "B. Không đề nghị đơn vị điều xe nâng người đến để đưa người lên cột.",
        "c": "C. Sử dụng dây đeo an toàn không đúng quy định.",
        "d": "D. Sử dụng không đúng ty leo được quy định để trèo, khi trèo không cẩn thận, không bám vào những vật cố định chắc chắn để vượt chướng ngại vật.",
        "correct": "c"
    },
    {
        "q": "Câu 114: Người thao tác đứng trên cột để thao tác thiết bị đóng cắt với cấp điện áp đến 35kV, ngoài việc mang găng tay cách điện phải giữ khoảng cách tối thiểu từ người đến thiết bị là bao nhiêu?",
        "a": "A. 1,5m.",
        "b": "B. 2m",
        "c": "C. 3m",
        "d": "D. 4m",
        "correct": "c"
    },
    {
        "q": "Câu 115: Những công việc nào sau đây được xem là công việc làm gần đường dây cao áp đang vận hành?",
        "a": "A. Công việc làm trên đoạn đường dây đã cắt điện, nhưng giao chéo với đường dây đang vận hành.",
        "b": "B. Công việc làm trên đường dây đã cắt điện nhưng đi chung cột với đường dây đang vận hành.",
        "c": "C. Công việc làm trên đoạn đường dây đã cắt điện nhưng có chiều dài từ 2,0 km trở lên đi bên cạnh hoặc đi song song với đường dây đang vận hành khác với khoảng cách nhỏ hơn quy định cho các cấp điện áp.",
        "d": "D. Tất cả các đáp án trên (dưới)",
        "correct": "d"
    },
    {
        "q": "Câu 116: Khi làm việc ở nhiều vị trí trên một đoạn đường dây điện trên không (không giao chéo hoặc đi song song với đường dây khác) không có nhánh rẽ, khoảng cách xa nhất giữa hai bộ nối đất không lớn hơn?",
        "a": "A. 1km",
        "b": "B. 1,5km",
        "c": "C. 2km",
        "d": "D. 2,5km",
        "correct": "c"
    },
    {
        "q": "Câu 117: Khi chỉ làm việc tại dây dẫn một pha của đường dây trên không (đi chung cột với đường dây cao áp khác đang vận hành) điện áp 110kV thì tại vị trí làm việc chỉ cần nối đất (để chống điện áp cảm ứng) dây dẫn của pha đó với điều kiện bảo đảm khoảng cách giữa các dây dẫn gần nhất của 2 mạch nhỏ nhất là bao nhiêu?",
        "a": "A. 3m",
        "b": "B. 4m",
        "c": "C. 5m",
        "d": "D. 6m",
        "correct": "b"
    },
    {
        "q": "Câu 118: Nối đất khi làm việc trên đường dây điện hạ áp cho phép?",
        "a": "A. Chập 3 dây pha lại với nhau.",
        "b": "B. Chập 3 pha và nối với dây trung tính.",
        "c": "C. Chập 3 pha với dây trung tính và nối với đất.",
        "d": "D. Chỉ cần chập 2 pha hai bên lại với nhau và nối với đất.",
        "correct": "c"
    },
    {
        "q": "Câu 119: Khi thi công kéo dây gần đường dây 35 kV đang vận hành, khoảng cách nhỏ nhất cho phép giữa dây cáp thép (cáp hãm, kẹp) và dây chằng thép tới dây dẫn của đường dây đang có điện là bao nhiêu?",
        "a": "A. Bằng chiều cao cột của đường đây 35 kV",
        "b": "B. 3 m.",
        "c": "C. 2,5 m.",
        "d": "D. 4 m.",
        "correct": "c"
    },
    {
        "q": "Câu 120: Khi làm việc trên đường dây đã cắt điện nhưng đi chung cột với đường dây đang vận hành, khoảng cách nhỏ nhất cho phép giữa các dây dẫn của hai mạch đường dây cấp điện áp 35 kV là bao nhiêu?",
        "a": "A. Không quy định.",
        "b": "B. 2m",
        "c": "C. 3m",
        "d": "D. 4m",
        "correct": "c"
    },
    {
        "q": "Câu 121: Khi kiểm tra định kỳ, nếu thấy dây dẫn điện đứt rơi xuống đất hoặc còn lơ lửng, thực hiện việc nào sau đây là đúng?",
        "a": "A. Không cho mọi người tới gần dưới 10 m, kể cả bản thân.",
        "b": "B. Không cho mọi người tới gần dưới 10 m, ngoại trừ bản thân.",
        "c": "C. Không cử người đứng gác nếu nơi có người qua lại.",
        "d": "D. Không báo ngay cho trực ca Điều độ.",
        "correct": "a"
    },
    {
        "q": "Câu 122: Trường hợp nào sau đây cấm làm việc trên đường dây đã cắt điện?",
        "a": "A. Ý 1 - Bắt đầu có gió cấp 6 trở lên hoặc có mưa nặng hạt, nước chảy thành dòng trên người và thiết bị.",
        "b": "B. Ý 2 - Có giông, bão hoặc sắp có giông, bão.",
        "c": "C. Ý 3 - Không có quy định.",
        "d": "D. Cả Ý 1 và Ý 2 đều đúng.",
        "correct": "d"
    },
    {
        "q": "Câu 123: Khi trèo lên cột làm việc, thực hiện các quy định nào sau đây là đúng?",
        "a": "A. Ý 1 - Kiểm tra sơ bộ tình trạng của móng cột và cột.",
        "b": "B. Ý 2 - Không cần sử dụng dây đeo an toàn.",
        "c": "C. Ý 3 - Trèo và làm việc ở phía đặt tay xà có sứ đỡ dây dẫn trên cột đơn.",
        "d": "D. Cả Ý 2 và Ý 3 đều đúng.",
        "correct": "a"
    },
    {
        "q": "Câu 124: Khi có gió cấp mấy thì cấm làm việc trên đường dây đã cắt điện?",
        "a": "A. Cấp 6 trở lên",
        "b": "B. Cấp 5 trở lên",
        "c": "C. Cấp 4 trở lên",
        "d": "D. Cấp 3 trở lên",
        "correct": "a"
    },
    {
        "q": "Câu 125: Yêu cầu của nhân viên đơn vị công tác khi thực hiện công việc sửa chữa trên đường dây đã cắt điện?",
        "a": "A. Ý 1 - Phải đảm bảo sức khỏe để làm việc trên cao.",
        "b": "B. Ý 2 - Phải là những công nhân chuyên nghiệp.",
        "c": "C. Ý 3 - Phải là những công nhân chuyên nghiệp, phải đủ sức khỏe để làm việc trên cao.",
        "d": "D. Chỉ cần yêu cầu theo Ý 1 hoặc Ý 2",
        "correct": "c"
    },
    {
        "q": "Câu 126: Làm việc trên đường dây trên không hạ áp có điện hoặc tiếp xúc trực tiếp với phần có điện hạ áp phải thực hiện những quy định sau đây?",
        "a": "A. Người làm việc tiếp xúc trực tiếp với dây dẫn, thiết bị mang điện hạ áp phải dùng dụng cụ cách điện có tay cầm chắc chắn và đảm bảo an toàn.",
        "b": "B. Người làm việc tiếp xúc trực tiếp với dây dẫn, thiết bị mang điện hạ áp phải dùng dụng cụ cách điện có tay cầm chắc chắn và đảm bảo an toàn; đi giày hoặc ủng cách điện hoặc đứng trên thảm cách điện.",
        "c": "C. Người làm việc tiếp xúc trực tiếp với dây dẫn, thiết bị mang điện hạ áp phải đứng trên bàn hoặc ghế cách điện để làm việc.",
        "d": "D. Người làm việc tiếp xúc trực tiếp với dây dẫn, thiết bị mang điện hạ áp chỉ cần sử dụng các vật liệu cách điện để che chắn tránh va chạm với vị trí có điện.",
        "correct": "b"
    },
    {
        "q": "Câu 127: Khi thực hiện sửa chữa, thay thế đường dây dẫn điện rẽ vào hộ phụ tải, cần thực hiện biện pháp nào để đảm bảo an toàn?",
        "a": "A. Không cần phải cắt điện cả đường dây trục chính hạ áp đó mà chỉ phải tháo đầu dây đấu vào đường dây trục chính và cắt cầu dao ở cuối nhánh rẽ đi vào các hộ phụ tải.",
        "b": "B. Thực hiện cắt Áp tô mát, làm biện pháp an toàn đối với đường dây trục chính mà có đường dây nhánh rẽ vào hộ phụ tải đấu nối.",
        "c": "C. Thực hiện tách lèo, cô lập đoạn đường dây trục chính phía trước vị trí mà đường dây nhánh rẽ vào hộ phụ tải đấu nối.",
        "d": "D. Thực hiện tách lèo, cô lập đoạn đường dây trục chính phía sau vị trí mà đường dây nhánh rẽ vào hộ phụ tải đấu nối.",
        "correct": "a"
    },
    {
        "q": "Câu 128: Biện pháp an toàn để ngăn ngừa dây dẫn bật lên trên đường dây có điện khi thực hiện tháo hay lắp dây dẫn?",
        "a": "A. Sử dụng dây thừng choàng qua dây dẫn ở cả hai đầu và ghì xuống đất.",
        "b": "B. Sử dụng dây thừng choàng qua đầu dây dẫn có nguy cơ bật lên đường dây có điện và ghì xuống đất.",
        "c": "C. Sử dụng dây thừng choàng qua dây dẫn và ghì xuống đất.",
        "d": "D. Quá trình thực hiện tháo hay lắp dây dẫn phải thực hiện thận trong không để dây dẫn bật lên đường dây có điện.",
        "correct": "a"
    },
    {
        "q": "Câu 129: Khi sửa chữa trên đường dây đã cắt điện nhưng giao chéo hoặc song song với đường dây đang vận hành phải thực hiện những quy định sau đây?",
        "a": "A. Thực hiện cắt điện và làm biện pháp an toàn đối với các đường dây có giao chéo hoặc song song với đường dây sẽ làm việc.",
        "b": "B. Thực hiện gắn cảnh báo ở tất cả các đường dây có giao chéo hoặc song song với đường dây sẽ làm việc để nhân viên công tác biết phòng tránh vi phạm khoảng cách an toàn.",
        "c": "C. Nếu người và phương tiện làm việc không vi phạm khoảng cách an toàn cho phép hoặc áp dụng các biện pháp an toàn phòng tránh khác thì không phải cắt điện đường dây ở gần với đường dây sẽ làm việc.",
        "d": "D. Không thực hiện cắt điện và làm biện pháp an toàn đối với các đường dây có giao chéo hoặc song song với đường dây sẽ làm việc, nhưng tại các vị trí có giao chéo, hoặc song song với đường dây đang vận hành phải cử người giám sát an toàn điện.",
        "correct": "c"
    },
    {
        "q": "Câu 130: Khi tháo hoặc nối dây trong khoảng cột giao chéo với đường dây đang vận hành, cần thực hiện biện pháp an toàn nào sau đây?",
        "a": "A. Biện pháp 1 - Phải thực hiện cắt điện các đường dây ở phía dưới đường dây sửa chữa.",
        "b": "B. Biện pháp 2 - Thực hiện biện pháp che chắn cách điện đối với các đường dây ở phía dưới đường dây sửa chữa.",
        "c": "C. Biện pháp 3 - Thực hiện biện pháp căng, néo đối với đường dây sửa chữa để phòng tránh dây dẫn bị tuột xuống vi phạm khoảng cách an toàn với các đường dây ở phía dưới.",
        "d": "D. Thực hiện kết hợp cả hai biện pháp 2 và 3.",
        "correct": "a"
    },
    {
        "q": "Câu 131: Khi thực hiện lắp đặt ở trên cột của đường dây điện trên không nhiều mạch đang vận hành, tuân thủ những quy định nào sau đây?",
        "a": "A. Cấm dùng thước làm bằng thép (kim loại) để đo.",
        "b": "B. Không buông thõng tự do các đầu dây thừng.",
        "c": "C. Cấm trèo lên cột ở phía dây dẫn có điện.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "d"
    },
    {
        "q": "Câu 132: Khi thực hiện công việc căng, kéo dây đường dây điện trên không (ĐDK) cao áp đến 35 kV đã cắt điện nhưng phía dưới có ĐDK hạ áp đi chung cột đang vận hành, phải thực hiện như thế nào để đúng quy định?",
        "a": "A. Ý 1 - Không phải cắt điện đối với ĐDK hạ áp ở phía dưới nhưng quá trình thi công ĐDK cao áp phía trên có thể va chạm mà không ảnh hưởng đến vỏ bọc cách điện đối với đường dây hạ áp phía dưới.",
        "b": "B. Ý 2 - Cắt điện và làm đầy đủ các biện pháp an toàn đối với ĐDK hạ áp ở phía dưới nếu quá trình thi công ĐDK cao áp có khả năng va chạm với đường dây hạ áp phía dưới.",
        "c": "C. Ý 3 - Trường hợp không thể cắt điện ĐDK hạ áp ở phía dưới để thi công ĐDK cao áp phía trên thì phải được lập thành phương án cụ thể và được Cấp có thẩm quyền phê duyệt.",
        "d": "D. Thực hiện Ý 2 hoặc Ý 3",
        "correct": "d"
    },
    {
        "q": "Câu 133: Khi tháo hoặc nối dây trong khoảng cột giao chéo với đường dây đang vận hành ở phía dưới, trường hợp không thể cắt điện các đường dây ở phía dưới thì thực hiện như thế nào để đúng quy định?",
        "a": "A. Cho phép làm giàn giáo để cách ly với đường dây đang có điện ở phía bên dưới; Giàn giáo phải đảm bảo khoảng cách an toàn đối với đường dây có điện.",
        "b": "B. Cho phép thực hiện che chắn đảm bảo cách điện đối với các đường dây ở phía dưới đường dây sửa chữa.",
        "c": "C. Cho phép làm giàn giáo để cách ly với đường dây đang có điện ở phía bên dưới; Giàn giáo phải đảm bảo tiêu chuẩn quy định và đảm bảo khoảng cách an toàn đối với đường dây có điện.",
        "d": "D. Thực hiện căng, néo đối với đường dây sửa chữa để phòng tránh dây dẫn bị tuột xuống vi phạm khoảng cách an toàn với các đường dây có điện ở phía dưới.",
        "correct": "c"
    },
    {
        "q": "Câu 134: Cách xác định theo quy ước với chữ “phải” hoặc “trái” số hiệu mạch của đường dây điện trên không (ĐDK)?",
        "a": "A. Ý 1 - Nhìn theo dọc ĐDK về phía số thứ tự cột tăng dần.",
        "b": "B. Ý 2 - Nhìn theo dọc ĐDK về phía số thứ tự cột giảm dần.",
        "c": "C. Ý 3 - Nhìn ngang tuyến ĐDK tại vị trí cột nào đó.",
        "d": "D. Cả Ý 1 và Ý 2 đều đúng.",
        "correct": "a"
    },
    {
        "q": "Câu 135: Theo Quy định tại Nghị định 62/2025/NĐ-CP của Chính phủ thì khoáng cách thấp nhất từ dây dẫn (ở trạng thái võng cực đại) đến mặt đất tự nhiên khi đường dây vượt qua các công trình có tầm quan trọng về kinh tế, chính trị, văn hoá, an ninh, quốc phòng, thông tin liên lạc, những nới thường xuyên tập trung đông người, các khu di tích lịch sử văn hoá, danh lam thắng cảnh không thấp hơn ?",
        "a": "A. 11 mét đối với điện áp đến 35kV; 12 mét đối với 110kV; 13 mét đối với 220kV",
        "b": "B. 14 mét đối với điện áp đến 35kV; 15 mét đối với 110kV; 18 mét đối với 220kV",
        "c": "C. 11 mét đối với điện áp đến 35kV; 13 mét đối với 110kV; 15 mét đối với 220kV",
        "d": "D. 12 mét đối với điện áp đến 35kV; 13 mét đối với 110kV; 14 mét đối với 220kV",
        "correct": "b"
    },
    {
        "q": "Câu 136: Theo Quy định tại Nghị định 62/2025/NĐ-CP của Chính phủ thì khoảng cách an toàn phóng điện (đối tượng nhà ở, công trình) đối với cấp điện áp đến 22kV là ?",
        "a": "A. 1,0 mét đối với dây bọc; 2,0 mét đối với dây trần.",
        "b": "B. 1,5 mét đối với dây bọc; 2,0 mét đối với dây trần.",
        "c": "C. 1,0 mét đối với dây bọc; 1,5 mét đối với dây trần.",
        "d": "D. 1,0 mét đối với dây bọc; 2,5 mét đối với dây trần.",
        "correct": "a"
    },
    {
        "q": "Câu 137: Theo Quy định tại Nghị định 62/2025/NĐ-CP của Chính phủ thì khoảng cách an toàn phóng điện (đối tượng nhà ở, công trình) đối với cấp điện áp 35kV là ?",
        "a": "A. 1,0 mét đối với dây bọc; 2,0 mét đối với dây trần.",
        "b": "B. 1,5 mét đối với dây bọc; 3,0 mét đối với dây trần",
        "c": "C. 1,0 mét đối với dây bọc; 1,5 mét đối với dây trần.",
        "d": "D. 1,0 mét đối với dây bọc; 2,5 mét đối với dây trần.",
        "correct": "b"
    },
    {
        "q": "Câu 138: Theo Quy định tại Nghị định 62/2025/NĐ-CP của Chính phủ thì khoảng cách an toàn phóng điện (đối tượng nhà ở, công trình) đối với cấp điện áp 110kV là ?",
        "a": "A. 2,0 mét",
        "b": "B. 4,5 mét",
        "c": "C. 5,0 mét",
        "d": "D. 4,0 mét",
        "correct": "d"
    },
    {
        "q": "Câu 139: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì khoảng cách tối thiểu từ dây dẫn đến điểm gần nhất của thiết bị, dụng cụ, phương tiện làm việc trong HLBVATLĐCA đối với cấp điện áp 110kV là ?",
        "a": "A. 4,0 mét",
        "b": "B. 6,0 mét",
        "c": "C. 5,0 mét",
        "d": "D. 3,0 mét",
        "correct": "d"
    },
    {
        "q": "Câu 140: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì khoảng cách tối thiểu từ dây dẫn đến điểm gần nhất của thiết bị, dụng cụ, phương tiện làm việc trong HLBVATLĐCA đối với cấp điện áp 35kV là ?",
        "a": "A. 4,0 mét",
        "b": "B. 6,0 mét",
        "c": "C. 5,0 mét",
        "d": "D. 2,0 mét",
        "correct": "d"
    },
    {
        "q": "Câu 141: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì khoáng cách thấp nhất từ dây dẫn (ở trạng thái võng cực đại) đến điểm cao nhất của phương tiện, công trình giao thông đường sắt (4,5 mét) đối với cấp điện áp 35kV là ?",
        "a": "A. 2,0 mét",
        "b": "B. 2,5 mét",
        "c": "C. 3,0 mét",
        "d": "D. 1,5 mét",
        "correct": "c"
    },
    {
        "q": "Câu 142: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì khoáng cách thấp nhất từ dây dẫn (ở trạng thái võng cực đại) đến chiều cao tĩnh không theo cấp kỹ thuật của đường thuỷ nội địa đối với cấp điện áp 110kV là ?",
        "a": "A. 2,0 mét",
        "b": "B. 2,5 mét",
        "c": "C. 1,5 mét",
        "d": "D. 4,0 mét",
        "correct": "a"
    },
    {
        "q": "Câu 143: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì khoáng cách thấp nhất từ dây dẫn (ở trạng thái võng cực đại) đến điểm cao nhất của phương tiện, công trình giao thông đường sắt (4,5 mét) đối với cấp điện áp 110kV là ?",
        "a": "A. 4,0 mét",
        "b": "B. 2,5 mét",
        "c": "C. 3,0 mét",
        "d": "D. 2,0 mét",
        "correct": "c"
    },
    {
        "q": "Câu 144: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì chiều rộng HLBVATLĐCA của ĐDK điện áp đến 22kV tính từ dây ngoài cùng về 2 phía là ?",
        "a": "A. 1,0 mét đối với dây bọc; 2,0 mét đối với dây trần.",
        "b": "B. 1,5 mét đối với dây bọc; 2,0 mét đối với dây trần",
        "c": "C. 1,0 mét đối với dây bọc; 1,5 mét đối với dây trần",
        "d": "D. 1,0 mét đối với dây bọc; 2,5 mét đối với dây trần",
        "correct": "a"
    },
    {
        "q": "Câu 145: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì chiều rộng HLBVATLĐCA của ĐDK điện áp đến 35kV tính từ dây ngoài cùng về 2 phía là ?",
        "a": "A. 1,0 mét đối với dây bọc; 2,0 mét đối với dây trần.",
        "b": "B. 1,5 mét đối với dây bọc; 3,0 mét đối với dây trần",
        "c": "C. 1,0 mét đối với dây bọc; 1,5 mét đối với dây trần",
        "d": "D. 1,0 mét đối với dây bọc; 2,5 mét đối với dây trần",
        "correct": "b"
    },
    {
        "q": "Câu 146: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì chiều rộng HLBVATLĐCA của ĐDK điện áp đến 110kV tính từ dây ngoài cùng về 2 phía là ?",
        "a": "A. 6,0 mét",
        "b": "B. 7,0 mét",
        "c": "C. 5,0 mét",
        "d": "D. 4,0 mét",
        "correct": "d"
    },
    {
        "q": "Câu 147: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì chiều cao HLBVATLĐCA của ĐDK điện áp đến 35kV tính từ đáy móng cột đến điểm cao nhất của công trình công thêm với khoảng cách an toàn theo chiều thẳng đứng là ?",
        "a": "A. 2,0 mét",
        "b": "B. 2,5 mét",
        "c": "C. 3,0 mét",
        "d": "D. 3,5 mét",
        "correct": "a"
    },
    {
        "q": "Câu 148: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì chiều cao HLBVATLĐCA của ĐDK điện áp 110kV tính từ đáy móng cột đến điểm cao nhất của công trình công thêm với khoảng cách an toàn theo chiều thẳng đứng là ?",
        "a": "A. 2,0 mét",
        "b": "B. 2,5 mét",
        "c": "C. 3,0 mét",
        "d": "D. 3,5 mét",
        "correct": "c"
    },
    {
        "q": "Câu 149: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì đối với cây trong thành phố, thị xã, thị trấn thì khoảng cách từ điểm bất kỳ của cây đến dây dẫn điện ở trạng thái võng cực đại của ĐDK điện áp đến 35kV không nhỏ hơn ?",
        "a": "A. 1,0 mét đối với dây bọc; 2,0 mét đối với dây trần.",
        "b": "B. 1,5 mét đối với dây bọc; 3,0 mét đối với dây trần",
        "c": "C. 0,7 mét đối với dây bọc; 1,5 mét đối với dây trần",
        "d": "D. 1,5 mét đối với dây bọc; 2,0 mét đối với dây trần",
        "correct": "c"
    },
    {
        "q": "Câu 150: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì đối với cây trong thành phố, thị xã, thị trấn thì khoảng cách từ điểm bất kỳ của cây đến dây dẫn (ở trạng thái tĩnh) của ĐDK điện áp 110kV không nhỏ hơn ?",
        "a": "A. 1,5 mét",
        "b": "B. 2,5 mét",
        "c": "C. 3,0 mét",
        "d": "D. 2,0 mét",
        "correct": "d"
    },
    {
        "q": "Câu 151: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì đối với đường dây ngoài thành phố, thị xã, thị trấn thì khoảng cách từ điểm cao nhất của cây theo chiều thẳng đứng đến dây dẫn thấp nhất (ở trạng thái tĩnh) của ĐDK điện áp đến 35kV không nhỏ hơn ?",
        "a": "A. 1,0 mét đối với dây bọc; 2,0 mét đối với dây trần.",
        "b": "B. 1,5 mét đối với dây bọc; 3,0 mét đối với dây trần",
        "c": "C. 0,7 mét đối với dây bọc; 2,0 mét đối với dây trần",
        "d": "D. 1,0 mét đối với dây bọc; 4,0 mét đối với dây trần",
        "correct": "c"
    },
    {
        "q": "Câu 152: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì đối với đường dây ngoài thành phố, thị xã, thị trấn thì khoảng cách từ điểm cao nhất của cây theo chiều thẳng đứng đến dây dẫn thấp nhất (ở trạng thái tĩnh) của ĐDK điện áp 110kV không nhỏ hơn?",
        "a": "A. 2,0 mét",
        "b": "B. 2,5 mét",
        "c": "C. 3,0 mét",
        "d": "D. 1,5 mét",
        "correct": "c"
    },
    {
        "q": "Câu 153: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì đối với đường dây ngoài thành phố, thị xã, thị trấn thì khoảng cách từ điểm bất kỳ của cây ngoài hành lang (khi cây đổ) đến bộ phận bất kỳ của đường dây đối với  ĐDK điện áp đến 35kV không nhỏ hơn ?",
        "a": "A. 2,0 mét",
        "b": "B. 1,5 mét",
        "c": "C. 1,0 mét",
        "d": "D. 0,7 mét",
        "correct": "d"
    },
    {
        "q": "Câu 154: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì đối với đường dây ngoài thành phố, thị xã, thị trấn thì khoảng cách từ điểm bất kỳ của cây ngoài hành lang (khi cây đổ) đến bộ phận bất kỳ của đường dây đối với  ĐDK điện áp 110kV không nhỏ hơn ?",
        "a": "A. 1,0 mét",
        "b": "B. 1,5 mét",
        "c": "C. 0,7 mét",
        "d": "D. 2,0 mét",
        "correct": "a"
    },
    {
        "q": "Câu 155: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì khoảng cách từ điểm bất kỳ của nhà ở, công trình trong HLBVATLĐCA (khi đã thoả mãn những điều kiện khác) đến dây dẫn gần nhất (ở trạng thái tĩnh) của ĐDK điện áp đến 35kV không nhỏ hơn ?",
        "a": "A. 2,0 mét",
        "b": "B. 2,5 mét",
        "c": "C. 3,0 mét",
        "d": "D. 4,0 mét",
        "correct": "c"
    },
    {
        "q": "Câu 156: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì khoảng cách từ điểm bất kỳ của nhà ở, công trình trong HLBVATLĐCA (khi đã thoả mãn những điều kiện khác) đến dây dẫn gần nhất (ở trạng thái tĩnh) của ĐDK điện áp 110kV không nhỏ hơn ?",
        "a": "A. 2,0 mét",
        "b": "B. 2,5 mét",
        "c": "C. 3,0 mét",
        "d": "D. 4,0 mét",
        "correct": "d"
    },
    {
        "q": "Câu 157: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì đơn vị quản lý vận hành công trình lưới điện cao áp phải đặt biển cấm, biển báo theo quy định nào?",
        "a": "A. Ở tất cả các cột điện trong khu tập trung đông người",
        "b": "B. Ở các cột điện gần đường đi lại",
        "c": "C. Ở các cột điện gần khu dân cư",
        "d": "D. Ở tất cả các cột điện",
        "correct": "d"
    },
    {
        "q": "Câu 158: Theo Quy định tại Nghị định 62/2025/NĐ-CP ngày 04/3/2025 của Chính phủ thì các cột điện phải sơn khoang trắng, đỏ và đặt đèn hiệu trên đỉnh cột theo quy định nào?",
        "a": "A. Ý 1 - Ở các cột điện cao từ 50 mét đến dưới 80 mét ở những vị trí có yêu cầu đặc biệt, sơn từ khoảng chiều cao 50 mét trở lên",
        "b": "B. Ý 2 - Ở các cột điện có chiều cao từ 80 mét trở lên, sơn từ khoảng chiều cao 50 mét trở lên",
        "c": "C. Cả Ý 1 và Ý 2 đều đúng.",
        "d": "D. Cả Ý 1 và Ý 2 đều sai.",
        "correct": "c"
    },
    {
        "q": "Câu 159: Theo Quy trình An toàn, nội dung nào dưới đây là quy định đúng và đủ, phải áp dụng để thực hiện nối đất khi làm việc trên ĐD cao áp?",
        "a": "A. Nối đất ngắn mạch (cố định hoặc/và di động), nối đất chống điện áp cảm ứng khi làm việc trên ĐD đã cắt điện hoặc đang xây dựng mới gần ĐD đang vận hành.",
        "b": "B. Nối đất ngắn mạch (cố định hoặc/và di động) khi làm việc trên ĐD đã cắt điện hoặc đang xây dựng mới gần ĐD đang vận hành.",
        "c": "C. Nối đất chống điện áp cảm ứng khi làm việc trên ĐD đã cắt điện hoặc đang xây dựng mới gần ĐD đang vận hành.",
        "d": "D. Nối đất chống điện áp cảm ứng, nối đất ngắn mạch (cố định hoặc/và di động), nối đất chống sét đánh lan truyền khi làm việc trên ĐD đã cắt điện hoặc đang xây dựng mới gần ĐD đang vận hành.",
        "correct": "a"
    },
    {
        "q": "Câu 160: Theo Quy trình An toàn, nội dung nào dưới đây là quy định đúng, phải áp dụng để thực hiện nối đất ngắn mạch (cố định hoặc/và di động) khi làm việc trên ĐD cao áp?",
        "a": "A.  (3). Nếu làm việc trên ĐDK có nhiều nguồn cấp đến và có nhánh rẽ, phải làm nối đất ở các đầu ĐDK có nguồn cấp đến, các nhánh không có nguồn cấp đến mở thiết bị đóng cắt, nhánh nào không mở được thiết bị đóng cắt thì phải làm một bộ nối đất ở nhánh đó.",
        "b": "B. (2). Nếu làm việc trên ĐD hai nguồn cấp không có nhánh rẽ, phải làm nối đất không vượt quá 500m/1 bộ.",
        "c": "C. (1). Nếu làm việc trên ĐD một nguồn cấp không có nhánh rẽ, cho phép làm nối đất chỉ bằng cách đóng DNĐ đầu đường dây.",
        "d": "D. Nội dung (1) và (2).",
        "correct": "a"
    },
    {
        "q": "Câu 161: Theo Quy trình An toàn, nội dung nào dưới đây là quy định đúng, phải áp dụng để thực hiện nối đất ngắn mạch (cố định hoặc/và di động) khi làm việc trên ĐD cao áp?",
        "a": "A. Đối với đường cáp phải đặt nối đất hai đầu của đường cáp tiến hành công việc.",
        "b": "B. Đối với đường cáp phải đặt nối đất ở tất cả các pha của đầu cáp sẽ tiến hành công việc.",
        "c": "C. Đối với đường cáp phải đặt nối đất ở tất cả các pha của đầu cáp còn lại (đầu cáp không tiến hành công việc).",
        "d": "D. Tất cả các đáp án trên (dưới)",
        "correct": "a"
    },
    {
        "q": "Câu 162: Theo Quy trình An toàn, nội dung nào dưới đây là quy định đúng, phải áp dụng để thực hiện nối đất ngắn mạch (cố định hoặc/và di động) khi làm việc trên ĐD cao áp?",
        "a": "A. Trường hợp làm việc tại vị trí đấu các đầu cáp chuyển tiếp thì phải đặt nối đất tại đầu còn lại của các sợi cáp.",
        "b": "B. Trường hợp làm việc tại một đầu cáp mà theo yêu cầu công việc không thể nối đất được tại đầu cáp này thì trong thời gian thực hiện công việc phải cử Người giám sát ATĐ ở đầu cáp còn lại.",
        "c": "C. Khi thử nghiệm đường cáp như thử cao áp, đo cách điện, thử thông mạch cho phép tháo nối đất hai đầu nhưng phải cách ly và đảm bảo khoảng cách an toàn phóng điện đối với đầu còn lại.",
        "d": "D. Tất cả các đáp án trên (dưới)",
        "correct": "a"
    },
    {
        "q": "Câu 163: Theo Quy trình An toàn, nội dung nào dưới đây là quy định không đúng (không phải áp dụng) khi thực hiện nối đất chống điện áp cảm ứng để làm việc trên ĐD cao áp?",
        "a": "A. Đối với ĐD bọc, tại vị trí công tác không có đấu nối hoặc đấu nối bảo đảm kín (cách điện) thì tháo rời dây dẫn để đặt nối đất.",
        "b": "B. Công việc có tháo rời dây dẫn thì phải nối đất ở hai phía chỗ định tháo rời trước khi tháo.",
        "c": "C. Khi chỉ làm việc tại dây dẫn một pha của ĐDK cao áp (kể cả khi mang dụng cụ) thì tại vị trí làm việc chỉ cần nối đất dây dẫn của pha đó với điều kiện bảo đảm khoảng cách ATĐ.",
        "d": "D. Đối với cấp điện áp trên 110kV: làm việc tại cột nào thì nối đất tại cột đó.",
        "correct": "a"
    },
    {
        "q": "Câu 164: Theo Quy trình An toàn, đối với cấp điện áp đến 110kV phải thực hiện nối đất chống điện áp cảm ứng để làm việc trên ĐD cao áp như thế nào?",
        "a": "A. Khoảng cách xa nhất giữa hai bộ nối đất không lớn hơn 2,0 km; trường hợp song song hoặc giao chéo với ĐDK cao áp có điện thì khoảng cách xa nhất giữa hai bộ nối đất không lớn hơn 500 m.",
        "b": "B. Khoảng cách xa nhất giữa hai bộ nối đất không lớn hơn 2,0 km; trường hợp song song hoặc giao chéo với ĐDK cao áp có điện thì khoảng cách xa nhất giữa hai bộ nối đất không lớn hơn 350 m.",
        "c": "C. Khoảng cách xa nhất giữa hai bộ nối đất không lớn hơn 2,0 km; trường hợp song song hoặc giao chéo với ĐDK cao áp có điện thì khoảng cách xa nhất giữa hai bộ nối đất không lớn hơn một khoảng cột.",
        "d": "D. Khoảng cách xa nhất giữa hai bộ nối đất không lớn hơn 2,0 km; trường hợp song song hoặc giao chéo với ĐDK cao áp có điện thì khoảng cách xa nhất giữa hai bộ nối đất không lớn hơn 300 m.",
        "correct": "a"
    },
    {
        "q": "Câu 165: Theo Quy trình An toàn, quy định nào dưới đây là đúng khi nối đất để làm việc trên ĐD hạ áp?",
        "a": "A. Nối đất ĐD tại các pha đầu nguồn (aptomat tổng/aptomat nhánh hoặc sau aptomat nhánh). Cho phép làm nối đất di động bằng cách chập cả 3 pha với dây trung tính và nối với đất.",
        "b": "B. Nối đất ĐD tại các pha cuối nguồn (aptomat tổng). Cho phép làm nối đất di động bằng cách chập cả 3 dây pha và nối với đất.",
        "c": "C. Trường hợp thay dây, nối dây hoặc tháo rời dây dẫn cho phép không phải nối đất đoạn ĐD đã tách ra khỏi lưới điện.",
        "d": "D. Đối với cáp vặn xoắn hoặc dây bọc hạ áp phải lắp đặt sẵn các đầu chờ để làm nối đất khi làm việc.",
        "correct": "a"
    },
    {
        "q": "Câu 166: Theo Quy trình An toàn, quy định nào dưới đây không đúng (không phải thực hiện) khi nối đất để làm việc trên ĐD hạ áp?",
        "a": "A. Trường hợp không thực hiện được nối đất, thì công tác này được xem là công tác sửa chữa có điện (Đơn vị công tác phải thực hiện theo quy trình được Tổng Công ty phê duyệt).",
        "b": "B. Cho phép làm nối đất di động bằng cách chập cả 3 pha với dây trung tính và nối với đất.",
        "c": "C. Đối với cáp vặn xoắn hoặc dây bọc hạ áp, vị trí thực hiện nối đất tại điểm hở như hộp aptomat đầu nguồn, hộp phân dây, ghíp nối, đầu chờ nối đất.",
        "d": "D. Trường hợp không thực hiện được nối đất, thì công tác này được xem là công tác sửa chữa có điện (Đơn vị công tác phải thực hiện theo quy trình được Cấp có thẩm quyền phê duyệt).",
        "correct": "a"
    },
    {
        "q": "Câu 167:  Theo quy trình an toàn, khi tiến hành công việc trên đường dây đã cắt điện, vị trí nối đất phải đảm bảo điều kiện nào sau đây?",
        "a": "A. Phải nối đất (cố định, di động) ngay sau khi kiểm tra không còn điện",
        "b": "B. Chỉ cần nối đất ở đầu đường dây có nguồn cấp đến",
        "c": "C. Chỉ cần nối đất ở tất cả các pha của thiết bị điện",
        "d": "D. Có thể không cần nối đất nếu thời gian làm việc dưới 2 giờ.",
        "correct": "a"
    },
    {
        "q": "Câu 168: Theo quy trình an toàn, đối với đường dây bọc, tại vị trí công tác không có đấu nối hoặc đấu nối bảo đảm kín, nếu không tháo rời dây dẫn thì phải đặt nối đất ở đâu?",
        "a": "A. Phải đặt nối đất ở các điểm nối dây dẫn liền kề",
        "b": "B. Ở hai đầu đoạn đường dây tiến hành công việc",
        "c": "C. Ở tất cả các pha tại vị trí làm việc",
        "d": "D. Không cần đặt nối đất",
        "correct": "a"
    },
    {
        "q": "Câu 169: Theo quy trình an toàn, khi làm việc trên đường dây đã cắt điện nhưng giao chéo hoặc song song với đường dây đang vận hành, nếu có tháo hoặc nối dây trong khoảng cột giao chéo thì phải làm gì đối với đường dây ở phía dưới?",
        "a": "A. Phải cắt điện các đường dây ở phía dưới đường dây sửa chữa",
        "b": "B. Cho phép làm giàn giáo cách ly",
        "c": "C. Cắt điện các đường dây ở phía trên đường dây sửa chữa",
        "d": "D. Chỉ cần cử người cảnh giới.",
        "correct": "a"
    },
    {
        "q": "Câu 170: Theo quy trình an toàn, khi dựng, hạ cột, cấm đặt các phương tiện trục kéo ngay phía dưới dây dẫn của đường dây cao áp đang vận hành. Dây cáp kéo và cáp hãm phải bố trí sao cho khi dây cáp bị bật, đứt thì:",
        "a": "A. Không thể văng về phía đường dây cao áp đang vận hành",
        "b": "B. Phải văng về phía có người cảnh giới",
        "c": "C. Có thể văng về phía dây dẫn đã cắt điện",
        "d": "D. Phải được nối đất cố định",
        "correct": "a"
    },
    {
        "q": "Câu 171: Theo quy trình an toàn, khi làm việc trên đường dây cao áp đến 35 kV đã cắt điện nhưng phía dưới có đường dây hạ áp đi chung cột đang vận hành, nếu không thể cắt điện đường dây hạ áp thì cần phải làm gì?",
        "a": "A. Phải lập thành phương án cụ thể, được Cấp có thẩm quyền phê duyệt",
        "b": "B. Cho phép tiến hành công việc có trèo lên cột khi có biện pháp ngăn ngừa vi phạm khoảng cách",
        "c": "C. Cắt điện cả đường dây cao áp và hạ áp.",
        "d": "D. Chỉ cần cử người giám sát an toàn điện",
        "correct": "a"
    },
    {
        "q": "Câu 172: Theo quy trình an toàn, khi tháo hoặc nối dây dẫn trong khoảng cột giao chéo với đường dây đang vận hành, nếu không thể cắt điện đường dây ở phía dưới để căng, kéo dây đường dây phía trên thì cho phép làm gì?",
        "a": "A. Cho phép làm giàn giáo để cách ly với đường dây có điện",
        "b": "B. Cử thêm người cảnh giới.",
        "c": "C. Bố trí người nắm dây thừng ghì dây dẫn xuống đất",
        "d": "D. Buộc dây dẫn bằng vật liệu cách điện",
        "correct": "a"
    },
    {
        "q": "Câu 173: Theo quy trình an toàn, đối với đường cáp, trường hợp làm việc tại một đầu cáp mà theo yêu cầu công việc không thể nối đất được tại đầu cáp này, thì trong thời gian thực hiện công việc đó phải có nối đất ở đâu?",
        "a": "A. Phải có nối đất ở đầu cáp còn lại",
        "b": "B. Phải có nối đất ở vị trí đấu nối của cáp.",
        "c": "C. Phải nối đất ở tất cả các pha",
        "d": "D. Phải dùng cáp chống sét",
        "correct": "a"
    },
    {
        "q": "Câu 174: Theo quy trình an toàn, khi tiến hành đo nối đất đường dây đang vận hành, không được làm việc trong điều kiện nào?",
        "a": "A. Trời có mưa, giông, sét",
        "b": "B. Trời có gió nhẹ, mây mù",
        "c": "C. Trời tối",
        "d": "D. Trời có nắng nóng",
        "correct": "a"
    },
    {
        "q": "Câu 175: Theo quy trình an toàn, khi làm việc trên đường dây hạ áp đi chung cột với đường dây cao áp đến 35 kV, nếu không có biện pháp đảm bảo khoảng cách quy định thì phải làm gì?",
        "a": "A. Cắt điện cả 02 đường dây cao áp và hạ áp",
        "b": "B. Chỉ cần cắt điện đường dây hạ áp",
        "c": "C. Chỉ cần cắt điện đường dây cao áp",
        "d": "D. Chỉ cần dùng dây an toàn kép",
        "correct": "a"
    },
    {
        "q": "Câu 176: Theo quy trình an toàn, khi căng lại dây, thay dây, hạ dây, nâng dây trên những nhánh dây hạ áp đi vào các hộ phụ tải, không phải cắt điện cả đường dây chính hạ áp đó mà chỉ phải tháo đầu dây đấu vào đường dây chính và làm gì?",
        "a": "A. Cắt cầu dao ở cuối nhánh rẽ đi vào các hộ phụ tải",
        "b": "B. Tháo cầu chì ở cuối nhánh rẽ đi vào các hộ phụ tải",
        "c": "C. Làm nối đất di động",
        "d": "D. Cử người cảnh giới",
        "correct": "a"
    },
    {
        "q": "Câu 177: Theo quy trình an toàn, khi làm việc trên đường dây hạ áp đang có điện, người làm việc tiếp xúc trực tiếp với dây dẫn, thiết bị mang điện hạ áp phải thực hiện quy định nào sau đây?",
        "a": "A. Phải dùng dụng cụ cách điện có tay cầm chắc chắn và đảm bảo an toàn",
        "b": "B. Phải đứng trên ghế cách điện",
        "c": "C. Cấm làm việc nếu trời có mưa nhỏ hạt",
        "d": "D. Phải có hai người cùng thực hiện",
        "correct": "a"
    },
    {
        "q": "Câu 178: Theo quy trình an toàn, đối với đường dây cao áp trên 110kV đã cắt điện, khi làm việc ở nhiều vị trí trên một đoạn đường dây thì việc nối đất được thực hiện như thế nào?",
        "a": "A. Làm việc tại cột nào thì nối đất tại cột đó",
        "b": "B. Khoảng cách xa nhất giữa hai bộ nối đất không lớn hơn 500m",
        "c": "C. Phải làm nối đất ở hai đầu đoạn đường dây",
        "d": "D. Chỉ cần nối đất ở vị trí có nguồn cấp đến",
        "correct": "a"
    },
    {
        "q": "Câu 179: Theo quy trình an toàn, khi làm việc với đường dây hạ áp có điện hoặc tiếp xúc trực tiếp với phần có điện hạ áp, người làm việc phải dùng các tấm cách điện để che, chắn đối với những bộ phận nào?",
        "a": "A. Phần có điện hạ áp gần nơi làm việc",
        "b": "B. Những bộ phận có điện cao áp",
        "c": "C. Các vật dẫn điện xung quanh",
        "d": "D. Tất cả các bộ phận của đường dây",
        "correct": "a"
    },
    {
        "q": "Câu 180: Theo quy trình an toàn, khi dựng, hạ cột gần với đường dây cao áp có điện, phải áp dụng các biện pháp nào?",
        "a": "A. Phải có biện pháp để không xảy ra tai nạn do vi phạm khoảng cách an toàn theo cấp điện áp của đường dây",
        "b": "B. Phải dùng dây thừng làm dây chằng néo về phía đường dây đang vận hành",
        "c": "C. Phải nối đất thân của tời nâng cột, hãm cột",
        "d": "D. Phải cắt điện đường dây cao áp đang vận hành",
        "correct": "a"
    },
    {
        "q": "Câu 181: Theo quy trình an toàn, trong quá trình lấy độ võng dây dẫn trên đường dây cao áp nhiều mạch đang vận hành, ở cột kim loại thì dây dẫn được coi như đã được nối đất qua đâu?",
        "a": "A. Qua ròng rọc kéo dây bằng kim loại treo vào thân cột",
        "b": "B. Qua chuỗi sứ cách điện",
        "c": "C. Qua dây thừng vô tận",
        "d": "D. Qua dây nối đất di động",
        "correct": "a"
    },
    {
        "q": "Câu 182: Theo quy trình an toàn, trong khi lấy độ võng dây dẫn trên đường dây cao áp nhiều mạch đang vận hành, ở cột bê tông (phi kim loại, chưa có hệ thống nối đất) thì ròng rọc phải được xử lý như thế nào?",
        "a": "A. Phải được nối đất riêng",
        "b": "B. Dây dẫn được coi như đã được nối đất",
        "c": "C. Phải được cách ly với dây dẫn",
        "d": "D. Phải được treo vào xà cột bằng dây thừng",
        "correct": "a"
    },
    {
        "q": "Câu 183: Theo quy trình an toàn, khi công tác trên chuỗi sứ đường dây đã cắt điện, nhân viên đơn vị công tác phải sử dụng dây an toàn phụ và cài chặt vào đâu?",
        "a": "A. Cài chặt vào xà hoặc đầu cột",
        "b": "B. Cài chặt vào dây dẫn",
        "c": "C. Cài chặt vào chuỗi sứ",
        "d": "D. Cài chặt vào thang trèo",
        "correct": "a"
    },
    {
        "q": "Câu 184: Theo quy trình an toàn, khi công tác trên đường dây đã cắt điện, cấm làm việc trong điều kiện nào?",
        "a": "A. Khi bắt đầu có gió cấp 6 trở lên hoặc có mưa nặng hạt, nước chảy thành dòng trên người và thiết bị điện",
        "b": "B. Ban đêm, trời có trăng",
        "c": "C. Có mưa nhỏ hạt",
        "d": "D. Nhiệt độ cao",
        "correct": "a"
    },
    {
        "q": "Câu 185: Theo quy trình an toàn, khi có hiện tượng phóng điện vào xe chuyên dùng, cấm người làm gì trước khi cắt nguồn điện gây phóng điện?",
        "a": "A. Cấm chạm vào xe, rời khỏi xe hoặc bước lên xe",
        "b": "B. Cấm liên lạc bằng điện thoại",
        "c": "C. Cấm nhảy ra khỏi xe",
        "d": "D. Cấm lái xe",
        "correct": "a"
    },
    {
        "q": "Câu 186: Theo quy trình an toàn, khi làm việc trên đường dây đã cắt điện nhưng đi chung cột với đường dây cao áp đang vận hành, cấm thực hiện những việc nào sau đây?",
        "a": "A. Cấm ra dây dẫn trên cột, cuộn dây dẫn thành cuộn trên cột, dùng thước đo bằng kim loại",
        "b": "B. Cấm dùng thước đo bằng tre, gỗ",
        "c": "C. Cấm làm việc vào ban đêm",
        "d": "D. Cấm sử dụng dây an toàn phụ",
        "correct": "a"
    },
    {
        "q": "Câu 187: Theo quy trình an toàn, khi vận hành xe chuyên dùng, nếu xe bị cháy khi chưa kịp cắt điện, người lái xe phải nhảy ra khỏi xe. Khi nhảy phải nhảy cả hai chân và đứng yên tại chỗ, nếu cần chạy ra xa phải làm gì?",
        "a": "A. Nhảy cả hai chân một lúc hoặc nhảy một chân (nhảy lò cò)",
        "b": "B. Chạy nhanh hết sức có thể",
        "c": "C. Bò sát mặt đất",
        "d": "D. Lăn người ra xa",
        "correct": "a"
    },
    {
        "q": "Câu 188: Theo quy trình an toàn, việc thay chì trên cột đường dây hạ áp phải có mấy người thực hiện?",
        "a": "A. Phải có 02 người",
        "b": "B. Phải có 01 người",
        "c": "C. Phải có 03 người",
        "d": "D. Tùy thuộc vào cấp điện áp",
        "correct": "a"
    },
    {
        "q": "Câu 189: Theo quy trình an toàn, khi làm việc trên đường dây hạ áp đang có điện, chỉ được phép thay chì trên cột vào lúc nào?",
        "a": "A. Chỉ được tiến hành lúc trời khô ráo, không có giông, gió to, sấm sét",
        "b": "B. Bất cứ lúc nào trong ngày",
        "c": "C. Chỉ vào ban ngày",
        "d": "D. Chỉ khi có người cảnh giới",
        "correct": "a"
    },
    {
        "q": "Câu 190: Theo quy trình an toàn, đối với đường cáp cũ đã không còn được sử dụng hoặc bị loại bỏ, khi có công việc thực hiện vẫn phải được thông báo cho đơn vị nào?",
        "a": "A. Đơn vị QLVH",
        "b": "B. Cơ quan quản lý nhà nước về điện lực",
        "c": "C. Cấp điều độ có quyền điều khiển",
        "d": "D. Công ty Điện lực",
        "correct": "a"
    },
    {
        "q": "Câu 191: Theo quy trình an toàn, khi đào đất ngay trên đường cáp điện, đầu tiên phải đào thử đường cáp để xác định vị trí đặt, độ sâu của cáp dưới sự giám sát của ai?",
        "a": "A. Nhân viên vận hành",
        "b": "B. Người chỉ huy trực tiếp",
        "c": "C. Người cảnh giới",
        "d": "D. Đội trưởng",
        "correct": "a"
    },
    {
        "q": "Câu 192: Theo quy trình an toàn, khi đào đất đối với đường cáp ngầm, các phương tiện thi công như xe ôtô, máy xúc phải cách đường cáp điện ít nhất bao nhiêu?",
        "a": "A. 1,0 m",
        "b": "B. 0,4 m",
        "c": "C. 0,6 m",
        "d": "D. 5,0 m",
        "correct": "a"
    },
    {
        "q": "Câu 193: Theo quy trình an toàn, khi làm việc với đường dây cao áp, Nhân viên đơn vị công tác không được mang theo vật dụng nào lên cột?",
        "a": "A. Đồ trang sức hoặc vật dụng cá nhân bằng kim loại",
        "b": "B. Dụng cụ làm việc",
        "c": "C. Điện thoại di động",
        "d": "D. Dây an toàn",
        "correct": "a"
    },
    {
        "q": "Câu 194: Theo quy trình an toàn, khi làm việc trên đường dây đã cắt điện nhưng giao chéo hoặc song song với đường dây đang vận hành, dây dẫn và dây chống sét sắp đưa lên cột phải được làm gì?",
        "a": "A. Phải được nối đất",
        "b": "B. Phải được bọc cách điện",
        "c": "C. Phải được kéo bằng dây thừng cách điện",
        "d": "D. Phải được sơn màu cảnh báo",
        "correct": "a"
    },
    {
        "q": "Câu 195: Theo quy trình an toàn, khi có giông, bão hoặc sắp có giông, bão, Người chỉ huy trực tiếp phải cho Nhân viên đơn vị công tác làm gì?",
        "a": "A. Ra khỏi khu vực nguy hiểm",
        "b": "B. Tăng cường giám sát",
        "c": "C. Rút dây nối đất",
        "d": "D. Tạm nghỉ giải lao",
        "correct": "a"
    },
    {
        "q": "Câu 196: Theo quy trình an toàn, khi làm việc trên đường dây đã cắt điện nhưng giao chéo hoặc song song với đường dây đang vận hành, nếu có tháo hay lắp dây dẫn thì phải dùng dây thừng choàng qua dây dẫn ở cả hai đầu và ghì xuống đất để đề phòng khả năng nào?",
        "a": "A. Dây bật lên trên đường dây có điện",
        "b": "B. Dây bị xoắn",
        "c": "C. Dây bị võng",
        "d": "D. Dây bị đứt",
        "correct": "a"
    },
    {
        "q": "Câu 197: Theo quy trình an toàn, khi tiến hành chặt cây ở gần đường dây, cấm chặt cây khi có gió cấp mấy trở lên?",
        "a": "A.  Cấp 4",
        "b": "B. Cấp 3",
        "c": "C. Cấp 5",
        "d": "D. Cấp 6",
        "correct": "a"
    },
    {
        "q": "Câu 198: Theo quy trình an toàn, khi làm việc trên đường dây cao áp có điện, chổi sơn để sơn xà và phần trên của cột phải làm bằng vật liệu gì và không dài quá bao nhiêu?",
        "a": "A. Bằng cán gỗ hoặc vật liệu cách điện, không dài quá 10 cm",
        "b": "B. Bằng kim loại, không dài quá 20 cm",
        "c": "C. Bằng nhựa, không dài quá 15 cm",
        "d": "D. Bằng tre, không dài quá 50 cm",
        "correct": "a"
    },
    {
        "q": "Câu 199: Theo quy trình an toàn, khi làm việc trên đường dây hạ áp đi chung cột với đường dây thông tin hoặc hạ áp khác, nếu quần áo bị ẩm và có thể va chạm người với đường dây hạ áp hoặc thông tin thì phải có giải pháp an toàn nào?",
        "a": "A. Che chắn, bọc vải cách điện đường dây hạ áp hoặc thông tin",
        "b": "B. Thay quần áo",
        "c": "C. Dùng sào cách điện",
        "d": "D. Cắt điện đường dây đó",
        "correct": "a"
    },
    {
        "q": "Câu 200: Theo quy trình an toàn, khi làm việc gần nơi có điện, nhân viên đơn vị công tác bị cấm làm gì đối với các biện pháp an toàn do Đơn vị QLVH lập?",
        "a": "A. Vượt qua ranh giới vùng làm việc an toàn",
        "b": "B. Sử dụng các biện pháp an toàn do Đơn vị QLVH lập",
        "c": "C. Yêu cầu tháo dỡ rào chắn",
        "d": "D. Yêu cầu dịch chuyển biển báo",
        "correct": "a"
    },
    {
        "q": "Câu 201: Theo quy trình an toàn, khi làm việc trên đường dây đã cắt điện nhưng đi chung cột với đường dây cao áp đang vận hành, Người chỉ huy trực tiếp phải có đủ các loại biển báo an toàn, cờ để treo ở các cột hai đường dây đi chung, cụ thể là loại cờ nào?",
        "a": "A. Cờ báo hiệu “màu vàng” và “màu đỏ”",
        "b": "B. Cờ báo hiệu “màu xanh” và “màu đỏ”",
        "c": "C. Cờ báo hiệu “màu trắng” và “màu xanh”",
        "d": "D. Cờ báo hiệu “màu đen” và “màu vàng”",
        "correct": "a"
    },
    {
        "q": "Câu 202: Theo quy trình an toàn, khi làm việc có điện, tại vị trí làm việc Nhân viên đơn vị công tác phải xác định được bộ phận nào gần nhất?",
        "a": "A. Phần có điện gần nhất",
        "b": "B. Phần đã cắt điện",
        "c": "C. Vị trí nối đất gần nhất",
        "d": "D. Vị trí đặt rào chắn gần nhất",
        "correct": "a"
    },
    {
        "q": "Câu 203: Theo quy trình an toàn, khi Nhân viên đi kiểm tra đường dây hoặc ghi chỉ số đồng hồ điện một mình, họ được phép thực hiện công việc nào?",
        "a": "A. Được phép kiểm tra bằng mắt trên mặt đất",
        "b": "B. Được phép vượt qua rào chắn",
        "c": "C. Được phép tự ý sửa chữa",
        "d": "D. Được phép lắp đặt thiết bị điện",
        "correct": "a"
    },
    {
        "q": "Câu 204: Theo quy trình an toàn, khi dựng, hạ cột, nếu muốn đảm bảo an toàn cơ học thì chỉ lúc nào mới được dùng dây cáp thép làm dây chằng néo về phía đường dây đang vận hành?",
        "a": "A. Chỉ lúc nâng cột",
        "b": "B. Chỉ lúc hạ cột",
        "c": "C. Chỉ lúc kéo căng dây",
        "d": "D. Luôn được dùng",
        "correct": "a"
    },
    {
        "q": "Câu 205: Theo quy trình an toàn, khi làm việc trên đường dây cao áp đã cắt điện nhưng đi chung cột với đường dây hạ áp đi chung cột đang vận hành, nếu không thể cắt điện đường dây hạ áp thì việc thực hiện công việc phải được lập thành phương án cụ thể và được ai phê duyệt?",
        "a": "A. Cấp có thẩm quyền",
        "b": "B. Người chỉ huy trực tiếp",
        "c": "C. Người cấp phiếu",
        "d": "D. Người giám sát ATĐ",
        "correct": "a"
    },
    {
        "q": "Câu 206: Theo quy trình an toàn, khi làm việc trên đường dây cao áp có điện, Nhân viên đơn vị công tác không được thực hiện công việc có điện một mình trong trường hợp nào ?",
        "a": "A. Luôn luôn",
        "b": "B. Khi có gió lớn",
        "c": "C. Khi trời tối",
        "d": "D. Khi có sương mù",
        "correct": "a"
    },
    {
        "q": "Câu 207: Theo quy trình an toàn, khi có hiện tượng phóng điện vào xe chuyên dùng, nếu xe bị cháy khi chưa kịp cắt điện, người lái xe khi nhảy ra khỏi xe phải đứng yên tại chỗ, nếu cần chạy ra xa thì phải nhảy cả hai chân một lúc hoặc nhảy một chân. Hành động này nhằm mục đích gì?",
        "a": "A. Để giảm thiểu nguy cơ bị điện giật do điện áp bước",
        "b": "B. Để giữ thăng bằng",
        "c": "C. Để chạy nhanh hơn",
        "d": "D. Để bảo vệ xe",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, chức danh nào trong PCT phải có mặt liên tục tại nơi làm việc để làm nhiệm vụ của mình và không làm bất cứ việc gì khác?",
        "a": "Người giám sát an toàn điện",
        "b": "Người cấp phiếu",
        "c": "Người cho phép",
        "d": "Người chỉ huy trực tiếp",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, trong trường hợp công việc kéo dài nhiều ngày và nghỉ hết ngày làm việc, các biện pháp an toàn phải được xử lý như thế nào?",
        "a": "Các biện pháp an toàn phải được giữ nguyên",
        "b": "Tháo dỡ các biện pháp an toàn và thực hiện lại vào ngày tiếp theo",
        "c": "Chỉ giữ nguyên biển báo và rào chắn",
        "d": "Chỉ giữ nguyên việc đặt nối đất di động",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi phát hiện có người bị điện giật, người phát hiện phải làm gì đầu tiên?",
        "a": "Tìm biện pháp nhanh nhất để tách nạn nhân ra khỏi mạch điện và sơ cứu",
        "b": "Gọi ngay cho cơ sở y tế gần nhất",
        "c": "Báo cáo ngay cho cấp trên trực tiếp",
        "d": "Chờ Nhân viên vận hành đến xử lý",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, loại công việc nào sau đây được thực hiện theo Phiếu công tác (PCT)?",
        "a": "Công việc có mức độ rủi ro từ cấp 2 trở lên theo quy định",
        "b": "Làm việc với ĐD/thiết bị điện hạ áp (trừ đại tu/sửa chữa lớn)",
        "c": "Công việc có mức độ rủi ro cấp 1 theo Quy định",
        "d": "Làm việc ở xa nơi có điện",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, sau khi hoàn thành công việc, PCT (kể cả những phiếu đã cấp nhưng không thực hiện) phải được lưu giữ trong thời gian tối thiểu bao lâu?",
        "a": "Ít nhất 03 tháng",
        "b": "01 tháng",
        "c": "06 tháng",
        "d": "01 năm",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi kết thúc công việc, Người chỉ huy trực tiếp (CHTT) phải thực hiện lệnh nào cuối cùng trước khi ký trao trả nơi làm việc?",
        "a": "Ra lệnh tháo dỡ các biện pháp an toàn do đơn vị công tác đã thực hiện",
        "b": "Yêu cầu Nhân viên đơn vị công tác thu dọn dụng cụ vật liệu",
        "c": "Kiểm tra lại công việc đã hoàn thành",
        "d": "Ra lệnh cho Nhân viên đơn vị công tác rút khỏi vị trí công tác",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi tiến hành lọc dầu ở máy biến áp đang vận hành, Quy trình yêu cầu gì ?",
        "a": "Phải chú ý kiểm tra nối đất vỏ máy trước",
        "b": "Chỉ cần Nhân viên vận hành giám sát trực tiếp",
        "c": "Phải cắt điện hoàn toàn máy biến áp",
        "d": "Phải có Giấy phép công tác (PCT) mới được lọc dầu",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi làm việc trong khu vực thiết bị điện áp cao đang mang điện, Nhân viên đơn vị công tác không được mang theo những vật gì?",
        "a": "Đồ trang sức hoặc vật dụng cá nhân bằng kim loại",
        "b": "Đồng hồ đeo tay không phải kim loại",
        "c": "Điện thoại di động",
        "d": "Dụng cụ bảo hộ lao động không cần thiết",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, đối với tủ máy cắt hợp bộ, Quy trình không cho phép vào làm việc trong khoang ngăn MC nếu vẫn còn điện ở đâu?",
        "a": "Hàm trên hoặc hàm dưới",
        "b": "Khoang rơ le bảo vệ",
        "c": "Thanh cái chính của tủ",
        "d": "Khoang cáp lực",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi làm việc với mạch đo lường bảo vệ liên quan đến máy biến dòng điện, Nhân viên đơn vị công tác phải chú ý điều gì?",
        "a": "Không để hở mạch phía thứ cấp của máy biến dòng điện",
        "b": "Phải tháo dây nối đất cố định phía thứ cấp",
        "c": "Không để ngắn mạch cuộn thứ cấp của máy biến dòng điện",
        "d": "Chỉ được thực hiện bởi người có bậc 5/5 ATĐ",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, thao tác tại chỗ (Local) thiết bị GIS (từ 110 kV trở lên) chỉ được phép thực hiện trong điều kiện nào?",
        "a": "Khi GIS không có điện",
        "b": "Dưới sự giám sát của Nhân viên vận hành ca trực",
        "c": "Khi áp lực khí SF6 vẫn đảm bảo",
        "d": "Trong trường hợp xử lý sự cố khẩn cấp",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi máy phát đang quay, nếu không có dòng điện kích từ thì máy vẫn được xem như thế nào?",
        "a": "Đang có điện",
        "b": "Đang ở chế độ dự phòng",
        "c": "Đã hoàn toàn không có điện",
        "d": "Chỉ còn điện áp dư (không nguy hiểm)",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi cắt tụ điện để sửa chữa, Nhân viên đơn vị công tác phải thực hiện biện pháp an toàn gì trước tiên?",
        "a": "Phóng điện (xả điện tích) các tụ điện theo quy định",
        "b": "Sử dụng dao cách ly để đóng, cắt tụ điện",
        "c": "Nối đất tất cả các pha của tụ điện",
        "d": "Tháo cầu chì bảo vệ tụ điện",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi tiến hành thử đóng, cắt máy cắt trong quá trình sửa chữa hoặc thí nghiệm, cần có sự đồng ý của ai?",
        "a": "Nhân viên vận hành",
        "b": "Người chỉ huy trực tiếp",
        "c": "Người cấp phiếu",
        "d": "Đơn vị điều độ",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, cấm ấn nút thao tác ở ngay hộp điều khiển tại máy cắt (110 kV trở lên) khi đang có điện, trừ trường hợp nào?",
        "a": "Ngăn ngừa sự cố, cứu người bị nạn điện, hoặc mất kết nối điều khiển xa",
        "b": "Trong mọi trường hợp xử lý sự cố",
        "c": "Khi Nhân viên vận hành có bậc ATĐ từ bậc 5/5 trở lên",
        "d": "Khi máy cắt không cắt hoặc không cắt hết các cực sau khi cắt từ xa",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, yêu cầu đối với thao tác xa dao tiếp địa là gì?",
        "a": "Mạch khóa liên động của dao tiếp địa đã được thí nghiệm, nghiệm thu và đưa vào vận hành",
        "b": "Chỉ được thực hiện khi dao cách ly liên quan đã cắt điện bằng tay tại chỗ",
        "c": "Chỉ áp dụng với dao tiếp địa điện áp đến 35 kV",
        "d": "Chỉ được thực hiện khi có 02 người phối hợp trực tiếp tại hiện trường",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi thao tác xa, phải có mấy người phối hợp thực hiện?",
        "a": "02 người (01 người giám sát và 01 người thao tác trực tiếp)",
        "b": "Tùy thuộc vào cấp điện áp của thiết bị",
        "c": "03 người (01 giám sát, 01 thao tác, 01 ghi chép)",
        "d": "01 người duy nhất (người thao tác)",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi làm việc gần nơi có điện, Đơn vị QLVH có trách nhiệm phối hợp với Đơn vị công tác để làm gì?",
        "a": "Phối hợp xác định ranh giới vùng làm việc an toàn",
        "b": "Thực hiện nối đất di động",
        "c": "Đơn vị QLVH tự quyết định ranh giới vùng an toàn",
        "d": "Giám sát an toàn điện liên tục cho Đơn vị công tác",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi làm việc trên thiết bị điện, công việc nào sau đây không cần nối đất di động nếu thỏa mãn điều kiện cách ly hoàn toàn, quan sát dễ dàng, không cảm ứng điện từ và được ghi rõ trong PCT/LCT?",
        "a": "Công việc với điện áp từ 35 kV trở xuống, thiết bị có cấu trúc gọn",
        "b": "Công việc với điện áp từ 110 kV trở lên",
        "c": "Công việc với điện áp hạ áp",
        "d": "Chỉ áp dụng cho thanh cái, thiết bị điện tại nhà máy, trạm điện có tiếp địa cố định",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi di chuyển, vận hành xe chuyên dùng trong khu vực trạm, khoảng cách nhỏ nhất từ bất kỳ bộ phận nào của xe đến phần mang điện của trạm phải tuân thủ quy định nào?",
        "a": "Không nhỏ hơn quy định về khoảng cách an toàn đối với các cấp điện áp (Điều 6 Quy trình an toàn)",
        "b": "Không nhỏ hơn 2m",
        "c": "Không nhỏ hơn khoảng cách an toàn phóng điện",
        "d": "Không nhỏ hơn 4m",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, việc mở tiếp địa cố định (DTĐ) đường cáp điện lực để tiến hành làm việc được quy định như thế nào?",
        "a": "Nếu công việc trên đường cáp điện cao áp cần phải mở tiếp địa cố định, phải được thông báo trước và được sự cho phép thực hiện của ĐVQLVH.",
        "b": "Nếu công việc trên đường cáp điện cao áp cần phải mở tiếp địa cố định, Cấp điều độ có quyền điều khiển phải được thông báo trước và cho phép thực hiện.",
        "c": "Nếu công việc trên đường cáp điện cao áp cần phải mở tiếp địa cố định, Cấp điều độ có quyền điều khiển phải ra lệnh cho ĐVCT thao tác.",
        "d": "Nếu công việc trên đường cáp điện cao áp cần phải mở tiếp địa cố định, ĐVCT phải được thông báo trước và xin phép Người cho phép thực hiện thao tác cắt các DTĐ",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, việc mở tiếp địa cố định (DTĐ) đường cáp điện lực để tiến hành làm việc được quy định như thế nào?",
        "a": "Nếu công việc trên đường cáp điện cao áp cần phải mở tiếp địa cố định, Cấp điều độ có quyền điều khiển phải được thông báo trước và cho phép thực hiện.",
        "b": "Nếu công việc trên đường cáp điện cao áp cần phải mở tiếp địa cố định, phải được thông báo trước và được sự cho phép thực hiện của ĐVQLVH.",
        "c": "Nếu công việc trên đường cáp điện cao áp cần phải mở tiếp địa cố định, Cấp điều độ có quyền điều khiển phải ra lệnh cho ĐVCT thao tác.",
        "d": "Nếu công việc trên đường cáp điện cao áp cần phải mở tiếp địa cố định, ĐVCT phải được thông báo trước và xin phép Người chophép thực hiện thao tác cắt các DTĐ.",
        "correct": "a"
    },
    {
        "q": "Theo quy trinh an toàn, đối với công tác với đường cáp điện lực, trách nhiệm ban hành hướng dẫn biện pháp thí nghiệm hoặc kiểm tra xác định cáp không còn điện thuộc về đơn vị nào?",
        "a": "Đơn vị quản lý vận hành (QLVH).",
        "b": "Ban An toàn của Tổng công ty.",
        "c": "Đơn vị điều độ có quyền điều khiển.",
        "d": "Đơn vị làm công việc.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, sau khi đã xác định đúng đường cáp điện lực cần công tác, cần thực hiện ngay các biện pháp an toàn nào trước khi tiến hành công việc?",
        "a": "Cáp phải được cách ly, nối đất và thực hiện các biện pháp an toàn theo quy định.",
        "b": "Chỉ cần nối đất",
        "c": "Chỉ cần cách ly và nối đất.",
        "d": "Chỉ cần thực hiện biện pháp an toàn đạt rào chắn, biển báo",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, Biển báo an toàn điện nào phải được đặt trên mặt đất hoặc trên cột mốc đối với đường cáp điện ngầm không sử dụng chung công trình hạ tầng kỹ thuật với các loại đường ống hoặc cáp khác?",
        "a": "Cáp điện lực.",
        "b": "Cấm lại gần! Có điện nguy hiểm chết người.",
        "c": "Chú ý! Phía trên có điện.",
        "d": "Cấm đóng điện! Có người đang làm việc.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, vị trí đặt biển báo 'Cáp điện lực' phải ở đâu so với đường cáp ngầm?",
        "a": "Tại vị trí tim rãnh cáp, dễ nhìn thấy.",
        "b": "Bên cạnh rãnh cáp, cách 0,5 m.",
        "c": "Cách 1,0 m so với đường cáp.",
        "d": "Tại vị trí đầu và cuối tuyến cáp",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, đối với đường cáp ngầm, ngoài việc đặt tại vị trí tim rãnh, biển báo 'Cáp điện lực' bắt buộc phải đặt ở vị trí nào khác?",
        "a": "Tại các vị trí chuyển hướng.",
        "b": "Tại các vị trí cáp đi gần đường dây trên không",
        "c": "Tại vị trí có cọc nối đất cáp.",
        "d": "Tại tất cả các vị trí cáp giao chéo với đường giao thông",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khoảng cách tối đa giữa hai biển báo 'Cáp điện lực' liền kề đối với đường cáp điện ngầm là bao nhiêu?",
        "a": "Không quá 30 mét.",
        "b": "Không quá 50 mét.",
        "c": "Không quá 20 mét.",
        "d": "Không quá 10 mét.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi đào đất ngay trên đường cáp điện ngầm, việc đào thử cáp để xác định vị trí và độ sâu phải dưới sự giám sát trực tiếp của ai?",
        "a": "Nhân viên vận hành.",
        "b": "Người giám sát ATĐ (nếu có).",
        "c": "Đại diện chính quyền địa phương.",
        "d": "Người chỉ huy trực tiếp của Đơn vị công tác.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, đơn vị QLVH phải ban hành hướng dẫn biện pháp nào sau đây đối với đường cáp điện lực?",
        "a": "Biện pháp thí nghiệm hoặc kiểm tra xác định cáp không còn điện.",
        "b": "Biện pháp bảo quản cáp trong kho.",
        "c": "Biện pháp kéo cáp trên đường giao thông.",
        "d": "Biện pháp xử lý sự cố nổ cáp.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi cần mở tiếp địa cố định của cáp điện áp cao, Đơn vị QLVH cần thông báo cho ai để được cho phép thực hiện?",
        "a": "Cấp điều độ có quyền điều khiển.",
        "b": "Người chỉ huy trực tiếp của Đơn vị công tác.",
        "c": "Lãnh đạo đơn vị làm công việc.",
        "d": "Người giám sát an toàn điện.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, trong các biện pháp xác định đúng đường cáp điện lực, biện pháp nào yêu cầu sử dụng nhãn định tuyến gắn trên cáp?",
        "a": "Dựa trên bản đồ định tuyến đường cáp do Đơn vị QLVH cập nhật và phê duyệt.",
        "b": "Sử dụng thiết bị định vị điểm sự cố.",
        "c": "Thí nghiệm tại điểm sự cố.",
        "d": "Sử dụng thiết bị phân biệt cáp.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, nguyên tắc chung khi làm việc với đường cáp điện lực và thiết bị điện liên quan là gì?",
        "a": "Phải coi là có điện cho đến khi thử không còn điện và được nối đất.",
        "b": "Chỉ làm việc vào ban ngày.",
        "c": "Cấm làm việc nếu không có Nhân viên vận hành giám sát.",
        "d": "Phải có rào chắn cố định bằng vật liệu cách điện.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, trong quá trình đào đất ngay trên đường cáp ngầm, ngoài việc đào thử cáp ban đầu, Đơn vị công tác còn phải thực hiện biện pháp an toàn nào khác?",
        "a": "Sử dụng xẻng tiếp tục đào khi còn cách cáp 0,4 mét",
        "b": "Tiến hành đo điện áp cảm ứng",
        "c": "Cử Người cảnh giới tại khu vực đào cáp.",
        "d": "Chỉ sử dụng dụng cụ bằng vật liệu phi kim loại.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, nếu công việc trên đường cáp điện áp cao cần phải mở tiếp địa cố định, Đơn vị QLVH phải được ai cho phép thực hiện?",
        "a": "Cấp điều độ có quyền điều khiển.",
        "b": "Người chỉ huy trực tiếp của Đơn vị công tác.",
        "c": "Trưởng ban An toàn Tổng công ty.",
        "d": "Người lập Phương án tổ chức thi công và biện pháp an toàn.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, theo quy định, biển báo 'CÁP ĐIỆN LỰC' phải được đặt tại các vị trí nào của đường cáp ngầm?",
        "a": "Tại vị trí tim rãnh cáp và tại các vị trí chuyển hướng.",
        "b": "Tại bất kỳ vị trí nào cách nhau không quá $50$ mét.",
        "c": "Chỉ cần đặt tại vị trí đầu và cuối tuyến cáp.",
        "d": "Chỉ cần đặt tại các vị trí cáp giao chéo với đường giao thông.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi làm việc với cáp điện lực đã cũ, đã không còn được sử dụng hoặc bị loại bỏ, Đơn vị công tác cần làm gì?",
        "a": "Phải thông báo cho Đơn vị QLVH.",
        "b": "Phải cắt cáp ngay tại vị trí làm việc.",
        "c": "Chỉ cần thông báo cho Cấp điều độ.",
        "d": "Có thể tiến hành công việc mà không cần bất kỳ biện pháp an toàn nào.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, để xác định đúng đường cáp điện lực cần công tác, cần phải sử dụng biện pháp định tuyến nào dựa trên nhãn gắn trên cáp?",
        "a": "Dựa trên bản đồ định tuyến đường cáp được phê duyệt.",
        "b": "Dựa trên các dấu hiệu sơn trên mặt đất.",
        "c": "Dựa trên ký hiệu cáp được ghi trên tủ điện.",
        "d": "Dựa trên tài liệu kỹ thuật của nhà sản xuất cáp.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, đối với biển báo 'CÁP ĐIỆN LỰC' dùng cho đường cáp ngầm, màu sắc của viền, chữ và mũi tên là gì?",
        "a": "Màu xanh tím hoặc đen chìm 1 đến 2 mm.",
        "b": "Màu xanh lá cây.",
        "c": "Màu đỏ tươi.",
        "d": "Màu đen.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, màu nền của biển báo 'CÁP ĐIỆN LỰC' đối với đường cáp ngầm là gì?",
        "a": "Màu trắng.",
        "b": "Màu vàng.",
        "c": "Màu xanh da trời.",
        "d": "Màu đỏ tươi.",
        "correct": "a"
    },
    {
        "q": "Khi thử nghiệm gần thiết bị 22 kV đang vận hành, không có rào chắn tạm thời thì khoảng an toàn điện không nhỏ hơn?",
        "a": "0,6m",
        "b": "0,7m",
        "c": "1,0m",
        "d": "1,5m",
        "correct": "c"
    },
    {
        "q": "Khi thử nghiệm máy biến áp cần phải làm gì?",
        "a": "Cô lập máy biến áp khỏi vận hành và cách ly với các thiết bị xung quanh cần tiến hành đấu tắt và nối đất toàn bộ các đầu ra của các máy biến áp trước khi tiến hành công tác thí nghiệm, kiểm tra và bảo dưỡng.",
        "b": "Khi tiến hành các thử nghiệm cao áp trên máy biến áp,  không phải đấu tắt và nối đất cuộn dây chưa được thử nghiệm, vỏ máy và các thiết bị lân cận.",
        "c": "Trong quá trình lọc sấy tuần hoàn dầu máy biến áp  không cần nối đất các cuộn dây được nối tắt và nối đất để tránh nguy cơ xuất hiện các điện tích tự do ở vỏ và cuộn dây.",
        "d": "Sau khi hoàn tất phép thử nghiệm cao áp một chiều trên các cuộn dây hoặc sứ đầu vào của các máy biến áp lực công suất lớn và điện áp cao cần dùng sào chuyên dụng có bộ điện trở xả phù hợp để xả các điện tích trước khi đấu đất chắc chắn chúng. Thời gian tiếp đất không được ít hơn 4 phút.",
        "correct": "a"
    },
    {
        "q": "Sau khi hoàn tất phép thử nghiệm cao áp một chiều trên các cuộn dây hoặc sứ đầu vào của các máy biến áp lực công suất lớn và điện áp cao cần dùng sào chuyên dụng có bộ điện trở xả phù hợp để xả các điện tích trước khi đấu đất chắc chắn chúng. Thời gian tiếp đất  không được ít hơn?",
        "a": "Không cần thời gian.",
        "b": "3 phút",
        "c": "4 phút",
        "d": "5 phút",
        "correct": "d"
    },
    {
        "q": "Khi thử nghiệm thiết bị điện áp cao tại chỗ (thiết bị trong vận hành), quy định nào đúng?",
        "a": "Phải có phiếu công tác do đơn vị quản lý vận hành cấp  (trừ những trường hợp quy định riêng).",
        "b": "Phải có lệnh công tác do người có thẩm quyền của đơn vị thử nghiệm cấp.",
        "c": "Phải có phiếu công tác do  người có thẩm quyền của đơn vị thử nghiệm cấp.",
        "d": "Tất cả các đáp án trên (dưới) đều sai",
        "correct": "a"
    },
    {
        "q": "Khi thử nghiệm điện áp cao ở phòng thử nghiệm, xe chuyên dùng, hoặc ở khu vực riêng rẽ không liên quan đến thiết bị đang vận hành thì phải có?",
        "a": "Lệnh công tác do đơn vị quản lý vận hành cấp",
        "b": "Phiếu công tác do đơn vị quản lý vận hành cấp",
        "c": "Lệnh công tác do người có thẩm quyền của đơn vị thử nghiệm cấp.",
        "d": "Không quy định.",
        "correct": "c"
    },
    {
        "q": "Khi tiến hành thử nghiệm, kiểm định các thiết bị, dụng cụ điện, vật liệu có nhiều đơn vị công tác phối hợp thực hiện ?",
        "a": "Đơn vị công tác khác nhau thì mỗi Đơn vị công tác phải thực hiện biện pháp kỹ thuật an toàn riêng biệt.",
        "b": "Các đơn vị vào làm chung một Phiếu công tác, cùng một người chỉ huy trực tiếp nếu chưa được thỏa thuận.",
        "c": "Đơn vị công tác có phiêu riêng không có dấu hiệu nhận biết để phân biệt người của từng đơn vị theo phạm vi làm việc vì đã làm trong một phạm vi.",
        "d": "Các đơn vị vào làm chung một Phiếu công tác, cùng một người chỉ huy trực tiếp  với nội dung công việc của từng nhóm khác nhau.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn quy định về khoảng cách tối thiểu từ phần dẫn điện của thiết bị thử nghiệm đến rào chắn cố định có nối đất đối với điện áp xung 100 kV là bao nhiêu mét ?",
        "a": "0,5 mét",
        "b": "0,75 mét",
        "c": "1,0 mét",
        "d": "1,5 mét",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn quy định về khoảng cách tối thiểu từ phần dẫn điện của thiết bị thử nghiệm đến rào chắn cố định có nối đất đối với điện áp xung trên 100 kV đến 150 kV là bao nhiêu mét ?",
        "a": "0,75 mét",
        "b": "0,5 mét",
        "c": "1,0 mét",
        "d": "1,5 mét",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn quy định về khoảng cách tối thiểu từ phần dẫn điện của thiết bị thử nghiệm đến rào chắn cố định có nối đất đối với điện áp xung trên 150 kV đến 400 kV là bao nhiêu mét ?",
        "a": "1,0 mét",
        "b": "0,5 mét",
        "c": "0,75 mét",
        "d": "1,5 mét",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn quy định về khoảng cách tối thiểu từ phần dẫn điện của thiết bị thử nghiệm đến rào chắn cố định có nối đất đối với điện áp xung trên 400 kV đến 500 kV là bao nhiêu mét ?",
        "a": "1,5 mét",
        "b": "2,5 mét",
        "c": "4,0 mét",
        "d": "2,0 mét",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn quy định về khoảng cách tối thiểu từ phần dẫn điện của thiết bị thử nghiệm đến rào chắn cố định có nối đất đối với điện áp xung trên 500 kV đến 1000 kV là bao nhiêu mét ?",
        "a": "2,5 mét",
        "b": "1,5 mét",
        "c": "4,0 mét",
        "d": "2,0 mét",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn quy định về khoảng cách tối thiểu từ phần dẫn điện của thiết bị thử nghiệm đến rào chắn cố định có nối đất đối với điện áp xung trên 1000 kV đến 1500 kV là bao nhiêu mét ?",
        "a": "4,0 mét",
        "b": "1,5 mét",
        "c": "2,5 mét",
        "d": "2,0 mét",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn quy định về khoảng cách tối thiểu từ phần dẫn điện của thiết bị thử nghiệm đến rào chắn cố định có nối đất đối với điện áp xung trên 1500 kV đến 2000 kV là bao nhiêu mét ?",
        "a": "5,0 mét",
        "b": "4,0 mét",
        "c": "3,5 mét",
        "d": "6,0 mét",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn quy định về khoảng cách tối thiểu từ phần dẫn điện của thiết bị thử nghiệm đến rào chắn cố định có nối đất đối với điện áp xung trên 2000 kV đến 2500 kV là bao nhiêu mét ?",
        "a": "6,0 mét",
        "b": "4,0 mét",
        "c": "3,5 mét",
        "d": "5,0 mét",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn quy định về khoảng cách tối thiểu từ phần dẫn điện của thiết bị thử nghiệm đến rào chắn cố định có nối đất đối với điện áp tần số công nghiệp, điện áp hiệu dụng và điện một chiều đến 6 kV là bao nhiêu mét ?",
        "a": "0,1 mét",
        "b": "0,2 mét",
        "c": "0,3 mét",
        "d": "0,6 mét",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn quy định về khoảng cách tối thiểu từ phần dẫn điện của thiết bị thử nghiệm đến rào chắn cố định có nối đất đối với điện áp tần số công nghiệp, điện áp hiệu dụng và điện một chiều trên 6 kV đến 10 kV là bao nhiêu mét ?",
        "a": "0,2 mét",
        "b": "0,3 mét",
        "c": "0,1 mét",
        "d": "0,6 mét",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn quy định về khoảng cách tối thiểu từ phần dẫn điện của thiết bị thử nghiệm đến rào chắn cố định có nối đất đối với điện áp tần số công nghiệp, điện áp hiệu dụng và điện một chiều trên 10 kV đến 20 kV là bao nhiêu mét ?",
        "a": "0,3 mét",
        "b": "0,2 mét",
        "c": "0,5 mét",
        "d": "1,0 mét",
        "correct": "a"
    },
    {
        "q": "Câu 01: Theo Quy trình An toàn trước khi làm việc với máy cơ khí phải:",
        "a": "A. Kiểm tra điện trở nối đất khu vực đặt máy, kiểm tra rò điện qua vỏ máy.",
        "b": "B. Kiểm tra tình trạng kiểm định kỹ thuật an toàn của và chất lượng của máy vẫn còn trong tình trạng sử dụng tốt.",
        "c": "C. Kiểm tra tình trạng, kỹ thuật an toàn của máy như: các bộ phận che chắn bảo vệ, dây tiếp đất, các loại dao, đá cắt mài vẫn còn trong tình trạng sử dụng tốt.",
        "d": "D. Kiểm tra kỹ thuật an toàn của máy theo các quy trình vận hành cho chính máy cơ khí đó.",
        "correct": "c"
    },
    {
        "q": "Câu 02: Theo Quy trình An toàn nội dung nhận diện mối nguy khi làm việc với thiết bị nâng ?",
        "a": "A. Điện giật, va đập trong quá trình nâng, di chuyển; Đổ, lật, nghiêng thiết bị nâng.",
        "b": "B. Vật nặng rơi, va đập trong quá trình nâng, di chuyển; Tai nạn giao thông.",
        "c": "C. Đuối nước, va đập trong quá trình nâng, di chuyển; Đổ, lật, nghiêng thiết bị nâng.",
        "d": "D. Vật nặng rơi, va đập trong quá trình nâng, di chuyển; Đổ, lật, nghiêng thiết bị nâng.",
        "correct": "d"
    },
    {
        "q": "Câu 03: Theo Quy trình An toàn giải pháp an toàn khi dùng hai hoặc nhiều thiết bị nâng để cùng nâng một tải trọng là ?",
        "a": "A. Phải có sơ đồ buộc móc tải, sơ đồ di chuyển tải và chỉ rõ trình tự thực hiện các thao tác, yêu cầu về kích thước, vật liệu, công nghệ, các thiết bị phụ trợ.",
        "b": "B. Phải có Phương án di chuyển tải và chỉ rõ trình tự thực hiện các thao tác, yêu cầu về kích thước, vật liệu, công nghệ, các thiết bị phụ trợ.",
        "c": "C. Phải có hồ sơ lý lịch thiết bị nâng đầy đủ khi di chuyển tải và chỉ rõ trình tự thực hiện các thao tác, yêu cầu về kích thước, vật liệu, công nghệ, các thiết bị phụ trợ.",
        "d": "D. Các thiết bị nang phải còn hạnh định thử nghiệm, lập kế hoạch thi công, chỉ rõ trình tự thực hiện các thao tác, yêu cầu về kích thước, vật liệu, công nghệ, các thiết bị phụ trợ.",
        "correct": "a"
    },
    {
        "q": "Câu 04: Theo Quy trình An toàn khi vận hành thiết bị nâng, quy định cấm như thế nào?",
        "a": "A. Cấm người đứng dưới hoặc giữa tải và chướng ngại vật, trừ đứng dưới độ vươn của cần trục,. Cấm nâng hạ tải trên thùng xe khi có người đang đứng trên thùng xe.",
        "b": "B. Cấm người đứng dưới hoặc giữa tải và chướng ngại vật, bao gồm cả độ vươn của cần trục, trong bán kính quay của thiết bị nâng. Cấm nâng hạ tải trên thùng xe khi có người đang đứng trên thùng xe.",
        "c": "C. Cấm người đứng dưới độ vươn của cần trục, trong bán kính quay của thiết bị nâng khi dây chằng bị đứt. Cấm nâng hạ tải trên thùng xe khi có người đang đứng trên thùng xe.",
        "d": "D. Cấm người đứng dưới hoặc giữa tải và chướng ngại vật, bao gồm cả độ vươn của cần trục,. Cấm nâng hạ tải trên thùng xe khi không có người đang đứng trên thùng xe.",
        "correct": "b"
    },
    {
        "q": "Câu 05: Theo Quy trình An toàn thủ tục an toàn trước khi tiến hành công việc có sử dụng thiết bị nâng là gì?",
        "a": "A. Tiến hành lập phương án thi công, phương án đảm bảo an toàn trong quá trình làm việc. Kiểm tra chất lượng thiết bị nâng.",
        "b": "B. Tiến hành đánh giá rủi ro các công việc nâng, hạ và lập phương án đảm bảo an toàn trong quá trình làm việc.",
        "c": "C. Tiến hành đánh giá rủi ro các công việc nâng, hạ và lập phương án thi công, phương án đảm bảo an toàn trong quá trình làm việc.",
        "d": "D. Kiểm tra hồ sơ thiết bị nâng và lập phương án phương án thi công, phương án đảm bảo an toàn trong quá trình làm việc.",
        "correct": "c"
    },
    {
        "q": "Câu 06: Theo Quy trình An toàn trong quá trình sử dụng xe cẩu, cầu trục, cần trục bánh lốp, nội dung nào không đúng (không phù hợp) quy định?",
        "a": "A. Không cho phép người lên, xuống cầu trục, cần trục khi thiết bị đang hoạt động; Vừa dùng người đẩy hoặc kéo tải vừa cho cơ cấu nâng/hạ tải; Nâng, hạ và chuyển tải khi có người đứng ở trên tải.",
        "b": "B. Không cho phép nâng tải có khối lượng vượt quá tải trọng cho phép; Để tải treo lơ lửng mà không có người điều khiển; Nâng tải trong tình trạng tải chưa ổn định hoặc chỉ móc một bên của móc kép;",
        "c": "C. Không được nâng tải vùi dưới đất, bị các vật khác đè lên, bị liên kết bằng bu lông hoặc bê tông với các vật khác; Cẩu với, kéo lê tải trọng;",
        "d": "D. Không cho phép thực hiện công việc khi chưa cắt điện các đường dây, thiết bị điện xung quanh nơi làm việc.",
        "correct": "d"
    },
    {
        "q": "Câu 07: Theo Quy trình An toàn trong quá trình sử dụng xe cẩu, cầu trục, cần trục bánh lốp, quy định các nội dung cấm như thế nào?",
        "a": "A. Cấm người không phận sự đi trong hành lang an toàn thiết bị đang hoạt động; Cấm sử dụng thiết bị nâng tải để nâng người.",
        "b": "B. Cấm người không phận sự đi trong hành lang an toàn thiết bị đang hoạt động; Cấm sử dụng thiết bị nâng tải để nâng người quá tải trọng cho phép của thiết bị.",
        "c": "C. Cấm người không phận sự đi trong hành lang an toàn khi thiết bị ngừng hoạt động; Cấm sử dụng thiết bị nâng tải để nâng người.",
        "d": "D. Cấm các phương tiện không phận sự đi trong hành lang an toàn thiết bị đang hoạt động; Cấm sử dụng thiết bị nâng tải để nâng người.",
        "correct": "a"
    },
    {
        "q": "Câu 08: Theo Quy trình An toàn trước khi hạ tải xuống khoang, hầm, phải thực hiện BPAT nào?",
        "a": "A. Phải hạ móc tải xuống vị trí thấp nhất để kiểm tra số vòng cáp còn lại trên tang. Nếu số vòng cáp còn lại trên tang lớn hơn 2,5 vòng thì mới được phép nâng, hạ tải.",
        "b": "B. Phải hạ móc không tải xuống vị trí thấp nhất để kiểm tra số vòng cáp còn lại trên tang. Nếu số vòng cáp còn lại trên tang lớn hơn 1,5 vòng thì mới được phép nâng, hạ tải.",
        "c": "C. Phải hạ móc không tải xuống vị trí cao nhất để kiểm tra số vòng cáp còn lại trên tang. Nếu số vòng cáp còn lại trên tang lớn hơn 1,0 vòng thì mới được phép nâng, hạ tải.",
        "d": "D. Phải hạ cần xuống vị trí thấp nhất để kiểm tra số vòng cáp còn lại trên tang. Nếu số vòng cáp còn lại trên tang lớn hơn 2,0 vòng thì mới được phép nâng, hạ tải.",
        "correct": "b"
    },
    {
        "q": "Câu 09: Theo Quy trình An toàn chỉ được phép hạ tải xuống vị trí đã định với điều kiện nào?",
        "a": "A. Nơi đó đã tháo bỏ dây treo các kết cấu, bộ phận lắp ráp khỏi móc, khi các kết cấu và bộ phận đó đã được cố định chắc chắn và ổn định.",
        "b": "B. Nơi đó đã được loại trừ được khả năng rơi, đổ hoặc trượt khi các kết cấu và bộ phận đó đã được cố định chắc chắn và ổn định.",
        "c": "C. Nơi đó đã được loại trừ được khả năng rơi, đổ hoặc trượt; Đã tháo bỏ dây treo các kết cấu, bộ phận lắp ráp khỏi móc, khi các kết cấu và bộ phận đó đã được cố định chắc chắn và ổn định.",
        "d": "D. Có phương án loại trừ được khả năng rơi, đổ hoặc trượt; tháo bỏ dây treo các kết cấu, bộ phận lắp ráp khỏi móc, khi các kết cấu và bộ phận đó đã được cố định chắc chắn và ổn định.",
        "correct": "c"
    },
    {
        "q": "Câu 10: Theo Quy trình An toàn người buộc móc tải chỉ được phép đến gần tải khi nào?",
        "a": "A. Khi tải đã hạ đến độ cao không lớn hơn 0,5 m tính từ mặt sàn chỗ người móc tải đứng.",
        "b": "B. Khi tải đã hạ đến độ cao không lớn hơn 1,5 m tính từ mặt sàn chỗ người móc tải đứng.",
        "c": "C. Khi tải đã hạ đến độ cao không lớn hơn 02 m tính từ mặt sàn chỗ người móc tải đứng.",
        "d": "D. Khi tải đã hạ đến độ cao không lớn hơn 01 m tính từ mặt sàn chỗ người móc tải đứng.",
        "correct": "d"
    },
    {
        "q": "Câu 11: Theo Quy trình An toàn phải ngừng hoạt động của cầu trục, cần trục khi nào?",
        "a": "A. Khi phát hiện các vết nứt ở những chỗ quan trọng của kết cấu kim loại, biến dạng dư của kết cấu kim loại; Phanh của bất kỳ một cơ cấu nào bị hỏng; Móc, cáp, ròng rọc, tang bị mòn, bị rạn nứt.",
        "b": "B. Khi phát hiện các vết nứt ở những chỗ quan trọng của kết cấu kim loại, biến dạng dư của kết cấu kim loại; Phanh của bất kỳ một cơ cấu nào bị hỏng; thiết bị không còn hạnh định thử nghiệm.",
        "c": "C. Khi không phát hiện các vết nứt ở những chỗ quan trọng của kết cấu kim loại, biến dạng dư của kết cấu kim loại; Phanh, móc, cáp, ròng rọc, tang bị mòn, bị rạn nứt.",
        "d": "D. Khi phát hiện các nguy hiểm tại buồng điều khiển thết bị; Phanh của bất kỳ một cơ cấu nào bị hỏng; Móc, cáp, ròng rọc, tang bị mòn, bị rạn nứt.",
        "correct": "a"
    },
    {
        "q": "Câu 12: Theo Quy trình An toàn việc quản lý xe cẩu, cầu trục, cần trục như thế nào?",
        "a": "A. Cử người theo dõi sửa chữa, thay thế các chi tiết, bộ phận đã bị hư hỏng, mòn quá quy định cho phép.",
        "b": "B. Phải có sổ để theo dõi bảo dưỡng định kỳ; theo dõi sửa chữa, thay thế các chi tiết, bộ phận đã bị hư hỏng, mòn quá quy định cho phép.",
        "c": "C. Phải có sổ để theo dõi mức tiêu hao nhiên liệu và kiểm tra các chi tiết, bộ phận đã bị hư hỏng, mòn quá quy định cho phép.",
        "d": "D. Quản đốc phân xường xe phải theo dõi sửa chữa, thay thế các chi tiết, bộ phận đã bị hư hỏng, mòn quá quy định cho phép.",
        "correct": "b"
    },
    {
        "q": "Câu 13: Theo Quy trình An toàn quy định tốc độ vận hành xe nâng hàng như thế nào?",
        "a": "A. Trong phạm vi công trường xe phải chạy với tốc độ ≤ 15km/h; Khi chạy trên đường thẳng trong kho ≤ 12km/h; Qua quãng đường ngoặt hoặc vòng phải chạy với tốc độ ≤ 5km/h.",
        "b": "B. Trong phạm vi công trường xe phải chạy với tốc độ ≤ 5km/h; Khi chạy trên đường thẳng trong kho ≤ 3km/h; Qua quãng đường ngoặt hoặc vòng phải chạy với tốc độ ≤ 5km/h.",
        "c": "C. Trong phạm vi công trường xe phải chạy với tốc độ ≤ 10km/h; Khi chạy trên đường thẳng trong kho ≤ 6km/h; Qua quãng đường ngoặt hoặc vòng phải chạy với tốc độ ≤ 5km/h.",
        "d": "D. Trong phạm vi công trường xe phải chạy với tốc độ ≤ 20km/h; Khi chạy trên đường thẳng trong kho ≤ 10km/h; Qua quãng đường ngoặt hoặc vòng phải chạy với tốc độ ≤15km/h.",
        "correct": "c"
    },
    {
        "q": "Câu 14: Theo Quy trình An toàn trong các điều cấm sau đây, điều cấm nào không đúng khi sử dụng xe nâng hàng?",
        "a": "A. Cấm sử dụng xe nâng hàng để nâng người lên cao hoặc chở người.Hạ thấp càng nâng khi di chuyển; Đứng hoặc làm việc trước hoặc dưới càng nâng khi xe đang vận hành;",
        "b": "B. Cấm nâng các kiện hàng phía dưới không có kẽ hở cần thiết để đưa càng nâng vào lấy hàng, xếp hàng lên đống không có tấm kê để rút càng ra.",
        "c": "C. Cấm nâng hàng đi vào nơi có nền không ổn định; Nâng các kiện hàng phía dưới không có kẽ hở cần thiết để đưa càng nâng vào lấy hàng; Xếp hàng lên đống không có tấm kê để rút càng ra.",
        "d": "D. Cấm vận hành xe nâng hàng khi chưa chằng buộc chắc chắn và không có người giữ thăng bằng cho hàng cần nâng.",
        "correct": "d"
    },
    {
        "q": "Câu 15: Theo Quy trình An toàn quy định về trọng lượng của hàng nâng như thế nào?",
        "a": "A. Phải được phân bố đều trên hai càng nâng và phần nhô ra ở phía trước không được vượt quá 1/3 độ dài của càng nâng.",
        "b": "B. Phải được phân bố đều trên hai càng nâng và phần nhô ra ở phía trước không được vượt quá 1/2 độ dài của càng nâng.",
        "c": "C. Phải được phân bố đều trên hai càng nâng và phần nhô ra ở phía trước không được vượt quá 1/4 độ dài của càng nâng.",
        "d": "D. Phải được phân bố đều trên hai càng nâng và phần nhô ra ở phía trước không được vượt quá 2/3 độ dài của càng nâng.",
        "correct": "a"
    },
    {
        "q": "Câu 16: Theo Quy trình An toàn khi sử dụng xe nâng hàng có lắp thêm cần để nâng và di chuyển, phải thực hiện động tác nào?",
        "a": "A. Không được nhấc bổng hàng lên rồi mới di chuyển. Khi di chuyển phải có biện pháp chống hàng lắc lư. Cấm kéo hoặc đẩy hàng trên đống xuống.",
        "b": "B. Phải nhấc bổng hàng lên rồi mới di chuyển. Khi di chuyển phải có biện pháp chống hàng lắc lư. Cấm kéo hoặc đẩy hàng trên đống xuống.",
        "c": "C. Phải nhấc bổng hàng lên rồi mới di chuyển. Khi chưa di chuyển phải có biện pháp chống hàng lắc lư. Cấm kéo hoặc đẩy hàng trên đống xuống.",
        "d": "D. Khi di chuyển phải có biện pháp chống hàng lắc lư. Cho phép kéo hoặc đẩy hàng trên đống xuống với điều kiện phải có kê lót đảm bảo an toàn.",
        "correct": "b"
    },
    {
        "q": "Câu 17: Theo Quy trình An toàn xe nâng chỉ được di chuyển khi nào?",
        "a": "A. Khung xe nghiêng hết về phía trước và cơ cấu nâng hàng đã được nâng lên cách mặt đất ít nhất bằng độ lớn của gầm xe với đường.",
        "b": "B. Khung xe nghiêng hết về phía sau và cơ cấu nâng hàng đã được nâng lên cách mặt đất ít nhất bằng độ lớn của thành xe với đường.",
        "c": "C. Khung xe nghiêng hết về phía sau và cơ cấu nâng hàng đã được nâng lên cách mặt đất ít nhất bằng độ lớn của gầm xe với đường.",
        "d": "D. Khung xe nghiêng hết về phía sau và cơ cấu nâng hàng đã được nâng lên cách mặt đất ít nhất 01 mét",
        "correct": "c"
    },
    {
        "q": "Câu 18: Theo Quy trình An toàn quy định về quản lý xe nâng hàng như thế nào?",
        "a": "A. Mỗi chủng loại xe nâng hàng phải có quy trình vận hành an toàn; Có sổ theo dõi quá trình bảo trì, bảo dưỡng, sửa chữa định kỳ.",
        "b": "B. Mỗi xe nâng hàng phải có quy trình vận hành an toàn; cử người theo dõi quá trình bảo trì, bảo dưỡng, sửa chữa định kỳ.",
        "c": "C. Mỗi xe nâng hàng phải có quy trình vận hành an toàn; hàng ngày người vận hành xe phải theo dõi quá trình bảo trì, bảo dưỡng, sửa chữa định kỳ.",
        "d": "D. Mỗi xe nâng hàng phải có quy trình vận hành an toàn; Có sổ theo dõi quá trình bảo trì, bảo dưỡng, sửa chữa định kỳ.",
        "correct": "d"
    },
    {
        "q": "Câu 19: Theo Quy trình An toàn khi vận hành xe nâng người, điều cấm nào đúng?",
        "a": "A. Cấm vận hành nơi có các phương tiện di động khác đang làm việc; Cấm rời khỏi sàn thao tác; Cấm sử dụng xe nâng người sai mục đích và chở người khi tiến hành di chuyển/tham gia giao thông.",
        "b": "B. Cấm vận hành nơi có các phương tiện di động khác đang làm việc; Cấm đứng trên sàn thao tác khi xe đang nâng; Cấm sử dụng xe nâng người sai mục đích.",
        "c": "C. Cấm rời khỏi sàn thao tác; Cấm sử dụng xe nâng người sai mục đích và chở người khi tiến hành di chuyển/tham gia giao thông.",
        "d": "D. Cấm vận hành nơi có các phương tiện di động khác đang làm việc; Cấm rời khỏi sàn thao tác; Cấm chở người khi tiến hành di chuyển/tham gia giao thông.",
        "correct": "a"
    },
    {
        "q": "Câu 20: Theo Quy trình An toàn quy định về quản lý xe nâng người như thế nào?",
        "a": "A. Đơn vị sử dụng phải lập sổ theo dõi tình trạng của xe, nhật trình sử dụng.",
        "b": "B. Đơn vị sử dụng phải lập nhật ký theo dõi tình trạng của xe, nhật trình sử dụng.",
        "c": "C. Đơn vị sử dụng phải cử người theo dõi tình trạng của xe, nhật trình sử dụng.",
        "d": "D. Đơn vị sử dụng phải lập nhật ký theo dõi tình trạng sự cố của xe.",
        "correct": "b"
    },
    {
        "q": "Câu 21: Theo Quy trình An toàn quy định những nội dung kiểm tra trước khi sử dụng pa lăng xích kéo tay thì nội dung nào không đúng (không phù hợp)?",
        "a": "A. Pa lăng còn đang trong thời hạn kiểm định;",
        "b": "B. Trục, cóc hãm, dây xích, móc phải đảm bảo an toàn mới cho phép sử dụng;",
        "c": "C. Vị trí treo pa lăng phải rộng rãi, không gần đường giao thông và đô thị.",
        "d": "D. Vật cần nâng phù hợp với tải trọng cho phép của pa lăng; Vị trí treo pa lăng phải chắc chắn, chịu được toàn bộ tải trọng.",
        "correct": "c"
    },
    {
        "q": "Câu 22: Theo Quy trình An toàn quy định kiểm tra tải trọng khi sử dụng pa lăng xích kéo tay như thế nào?",
        "a": "A. Khi nâng tải trọng lên vị trí khoảng 10cm phải dừng lại để kiểm tra an toàn mới được nâng tiếp;",
        "b": "B. Khi nâng tải trọng lên vị trí khoảng 30cm phải dừng lại để kiểm tra an toàn mới được nâng tiếp;",
        "c": "C. Khi nâng tải trọng lên vị trí khoảng 50cm phải dừng lại để kiểm tra an toàn mới được nâng tiếp;",
        "d": "D. Khi nâng tải trọng lên vị trí khoảng 20cm phải dừng lại để kiểm tra an toàn mới được nâng tiếp;",
        "correct": "d"
    },
    {
        "q": "Câu 23: Theo Quy trình An toàn điều cấm nào không đúng trong quy định khi sử dụng pa lăng xích kéo tay?",
        "a": "A. Cấm kiểm tra an toàn khi bắt đầu nâng tải trọng lên.",
        "b": "B. Cấm để dây xích bị xoắn hay thắt nút, vận hành pa lăng khi chốt móc bị hỏng;",
        "c": "C. Cấm treo vật nặng lơ lửng trên pa lăng khi không có người giám sát; Cấm dùng xích của pa lăng để quàng vào vật cần nâng;",
        "d": "D. Nâng tải trọng lớn hơn giá trị cho phép của pa lăng; Để người đứng dưới tải trọng",
        "correct": "a"
    },
    {
        "q": "Câu 24: Theo Quy trình An toàn quy định khi sử dụng xích kéo tay như thế nào?",
        "a": "A. Khi dây xích khi bị đứt không được nối mà phải thay thế bằng xích mới.",
        "b": "B. Không được tự chế, lắp động cơ điện để điều khiển pa lăng xích; Không được kéo quá nhanh vì sẽ làm cho tải trọng bị lắc trong quá trình nâng hạ.",
        "c": "C. Không dùng xích của pa lăng để quàng vào vật cần nâng.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng.",
        "correct": "d"
    },
    {
        "q": "Câu 25: Theo Quy trình An toàn nội dung cơ bản nhận diện mối nguy khi hàn điện, hàn hơi là ?",
        "a": "A. Điện giật do chạm, chập vào các bộ phận dẫn điện; Tai nạn giao thông; Khí, bụi độc hại; Bỏng do hạt kim loại nóng chảy, kim loại có nhiệt độ cao; Bỏng lạnh",
        "b": "B. Bức xạ có hại do hồ quang điện; Khí, bụi độc hại; Bỏng do hạt kim loại nóng chảy, kim loại có nhiệt độ cao; Bỏng lạnh; Cháy, nổ; Khói bụi.",
        "c": "C. Điện giật do chạm mỏ hàn; Bức xạ có hại do hồ quang điện; Khí, bụi độc hại; Bỏng lạnh; Cháy, nổ.",
        "d": "D. Điện giật do rò, chạm, chập vào các bộ phận dẫn điện; Bức xạ có hại do hồ quang điện; Khí, bụi độc hại; Bỏng do hạt kim loại nóng chảy, kim loại có nhiệt độ cao; Cháy, nổ.",
        "correct": "d"
    },
    {
        "q": "Câu 26: Theo Quy trình An toàn đối với những người được phép tiến hành công tác hàn, điều kiện nào không đúng (không cần thiết)?",
        "a": "A. Được đào tạo về chuyên môn về phóng chống thiên tai và cứu nạn cứu hộ.",
        "b": "B. Được huấn luyện, bồi dưỡng nghiệp vụ phòng cháy chữa cháy và được cấp giấy chứng nhận huấn luyện nghiệp vụ phòng cháy và chữa cháy.",
        "c": "C. Sử dụng đầy đủ các PTBVCN: mặt nạ có kính hàn, quần áo, mũ, găng tay bằng vật liệu khó cháy, cách điện và chịu được các tác động cơ học.",
        "d": "D. Được đào tạo về chuyên môn, có chứng chỉ hoặc do cơ sở đào tạo hợp pháp cấp; Được huấn luyện, kiểm tra sát hạch về quy trình kỹ thuật an toàn - bảo hộ lao động và có thẻ an toàn.",
        "correct": "a"
    },
    {
        "q": "Câu 27: Theo Quy trình An toàn yêu cầu chung về thực hiện công tác hàn về khoảng cách an toàn như thế nào?",
        "a": "A. Bảo đảm khoảng cách an toàn theo quy định.",
        "b": "B. Khi hàn ở tầng trên, thì các tầng phía dưới (khi không có sàn chống cháy bảo vệ) phải dọn sạch các chất dễ cháy nổ trong bán kính không nhỏ hơn 5m.",
        "c": "C. Di chuyển vật tư thiết bị, hàng hóa dễ cháy hoặc che chắn không để vảy hàn rơi xuống tối thiểu 10m",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng.",
        "correct": "d"
    },
    {
        "q": "Câu 28: Theo Quy trình An toàn khi hành điện, hàn hơi, điều cấm nào không đúng (không phù hợp)?",
        "a": "A. Không được tiến hành đồng thời cả hàn hơi và hàn điện trong các thùng kín;",
        "b": "B. Cấm hàn khi có các chất dễ bắt lửa như xăng, axêton, spirit trắng ở gần vị trí hàn.",
        "c": "C. Cấm hàn ở khoảng cách dưới 5m so với vị trí để các chất dễ cháy nổ.",
        "d": "D. Cấm hàn ở khoảng cách dưới 10m so với vị trí để các chất dễ cháy nổ.",
        "correct": "d"
    },
    {
        "q": "Câu 29: Theo Quy trình An toàn quy định BPAT khi hàn trong các thùng kín (trong không gian hạn chế) như thế nào?",
        "a": "A. Phải  có đèn chiếu sáng đặt ở bên ngoài hoặc dùng đèn di động cầm tay, điện áp không lớn hơn 36V.",
        "b": "B. Phải dùng biến áp cách ly cho đèn chiếu sáng và đặt máy biến áp ở bên ngoài thùng kín.",
        "c": "C. Cấm dùng biến áp tự ngẫu để hạ áp.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng.",
        "correct": "d"
    },
    {
        "q": "Câu 30: Theo Quy trình An toàn quy định về nối đất thiết bị hàn điện như thế nào?",
        "a": "A. Phải nối đất phần kim loại của máy hàn theo quy định trước khi thiết bị được nối vào nguồn.",
        "b": "B. Phải nối đất phần kim loại của thiết bị, vật được hàn điện cũng như các kết cấu và sản phẩm hàn theo quy định trước khi thiết bị được nối vào nguồn.",
        "c": "C. Phải nối đất phần kim loại của thiết bị được hàn điện cũng như các kết cấu và sản phẩm hàn và máy hàn theo quy định trước khi thiết bị được nối vào nguồn.",
        "d": "D. Không phải nối đất phần kim loại của thiết bị được hàn điện cũng như các kết cấu và sản phẩm hàn, chỉ nối đất máy hàn theo quy định trước khi thiết bị được nối vào nguồn.",
        "correct": "c"
    },
    {
        "q": "Câu 31: Theo Quy trình An toàn quy định BPAT khi hàn trong các thùng kín bằng kim loại như thế nào?",
        "a": "A. Máy hàn phải để ngoài, thợ hàn phải được trang bị mũ bảo hộ lao động, giầy hoặc thảm cách điện và găng tay cao su. mặt nạ phòng độc có dây mềm dẫn không khí.",
        "b": "B. Máy hàn phải để trong thùng, thợ hàn phải được trang bị mũ bảo hộ lao động, giầy hoặc thảm cách điện và găng tay cao su. mặt nạ phòng độc có dây mềm dẫn không khí.",
        "c": "C. Thợ hàn phải được trang bị mũ bảo hộ lao động, giầy hoặc thảm cách điện và găng tay cao su. mặt nạ phòng độc có dây mềm dẫn không khí.",
        "d": "D. Máy hàn phải để ngoài, thợ hàn phải được trang bị bộ quần áo chống cháy và bình thở ô xy.",
        "correct": "a"
    },
    {
        "q": "Câu 32: Theo Quy trình An toàn quy định BPAT khi hàn điện ở nơi đông người cùng làm việc và người qua lại như thế nào?",
        "a": "A. Phải lập rào chắn để ngăn và bảo vệ những người xung quanh.",
        "b": "B. Phải có tấm chắn bằng vật liệu không cháy để ngăn và bảo vệ những người xung quanh.",
        "c": "C. Phải đặt biển “Cấm vào” để ngăn và bảo vệ những người xung quanh.",
        "d": "D. Phải đặt biển “Cấm lại gần” để ngăn và bảo vệ những người xung quanh.",
        "correct": "b"
    },
    {
        "q": "Câu 33: Theo Quy trình An toàn quy định BPAT khi hàn điện ở trên cao, nội dung nào không đúng?",
        "a": "A. Hàn trên giàn giáo bằng gỗ, sàn của nó phải được phủ kín bằng tấm kim loại, các tông amiăng hay bằng những vật liệu khó cháy khác.",
        "b": "B. Hàn điện ở tầng trên phải có biện pháp bảo vệ những người làm việc ở tầng dưới khỏi bị các giọt kim loại, các mẩu que hàn cháy dở văng hoặc rơi trúng vào người hay các vật dễ cháy ở phía dưới.",
        "c": "C. Không cho phép hàn điện có bố trí 2 tầng; Phải có biện pháp bảo vệ khỏi bị các giọt kim loại, các mẩu que hàn cháy dở văng hoặc rơi trúng vào người hay các vật dễ cháy.",
        "d": "D. Hàn điện trên cao mà không có giàn giáo người thợ hàn nhất thiết phải dùng dây đai an toàn bền nhiệt, có túi đựng dụng cụ, điện cực và các vật cháy dở.",
        "correct": "c"
    },
    {
        "q": "Câu 34: Theo Quy trình An toàn khi vào làm việc với hệ thống ắc quy phải thực hiện trang phục BHLĐ nào?",
        "a": "A. Mặc quần áo BHLĐ và đeo găng tay cao su để bảo vệ cơ thể khỏi bị ảnh hưởng do axít hoặc kiềm.",
        "b": "B. Đeo kính bảo vệ mắt và găng tay cách điện để bảo vệ cơ thể khỏi bị điện giât.",
        "c": "C. Mặc quần áo chuyên dụng, đeo kính bảo vệ mắt và găng tay cao su để bảo vệ cơ thể khỏi bị ảnh hưởng do axít hoặc kiềm.",
        "d": "D. Mặc quần áo chuyên dụng, đeo kính hàn bảo vệ mắt và găng tay cao su để bảo vệ cơ thể khỏi bị ảnh hưởng do axít hoặc kiềm.",
        "correct": "c"
    },
    {
        "q": "Câu 35: Theo Quy trình An toàn khi vào làm việc với hệ thống ắc quy phải chuẩn bị những vật liệu, hóa chất nào?",
        "a": "A. Chuẩn bị a xít phù hợp với hệ thống ắc quy. Trang bị các chai cồn (để phun rửa mắt) để đề phòng khi bị dung dịch điện phân bắn vào mắt.",
        "b": "B. Chuẩn bị chất trung hoà phù hợp với hệ thống ắc quy. Trang bị các chai dung dịch (để phun rửa mắt) để đề phòng khi bị dung dịch điện phân bắn vào mắt.",
        "c": "C. Chuẩn bị các chất lau rửa hệ hệ thống ắc quy. Trang bị các chai nước sạch (để phun rửa mắt) để đề phòng khi bị dung dịch điện phân bắn vào mắt.",
        "d": "D. Chuẩn bị chất trung hoà phù hợp với hệ thống ắc quy. Trang bị các chai nước sạch (để phun rửa mắt) để đề phòng khi bị dung dịch điện phân bắn vào mắt.",
        "correct": "d"
    },
    {
        "q": "Câu 36: Theo Quy trình An toàn trước khi vào làm việc với hệ thống ắc quy phải kiểm tra những nội dung gì?",
        "a": "A. Phải kiểm tra phòng ắc quy đã được thông gió để phòng ngừa bị ngộ độc hoặc cháy nổ do khí phát sinh từ hệ thống ắc quy.",
        "b": "B. Kiểm tra a xít phù hợp với hệ thống ắc quy. Trang bị các chai cồn (để phun rửa mắt) để đề phòng khi bị dung dịch điện phân bắn vào mắt.",
        "c": "C. Kiểm tra chất trung hoà phù hợp với hệ thống ắc quy. Trang bị các chai dung dịch (để phun rửa mắt) để đề phòng khi bị dung dịch điện phân bắn vào mắt.",
        "d": "D. Kiểm tra các chất lau rửa hệ hệ thống ắc quy. Trang bị các chai nước sạch (để phun rửa mắt) để đề phòng khi bị dung dịch điện phân bắn vào mắt.",
        "correct": "a"
    },
    {
        "q": "Câu 37: Theo Quy trình An toàn quy định về ghi nhãn trên các bình chứa axít, chứa dung dịch axít, nước cất như thế nào?",
        "a": "A. Ghi rõ trên thành bình từng loại bằng sơn chống gỉ.",
        "b": "B. Ghi rõ trên thành bình từng loại bằng sơn chống axít.",
        "c": "C. Ghi rõ, dán giấy tên trên thành bình từng loại.",
        "d": "D. Ghi rõ trên thành bình từng loại bằng bút mực không xóa.",
        "correct": "b"
    },
    {
        "q": "Câu 38: Theo Quy trình An toàn quy định về bảo quản axít đậm đặc như thế nào?",
        "a": "A. Phải để trong các buồng kín, ngoài axít ra không được phép để dung dịch trung hoà cùng; axít phải để trong các bình chuyên dùng bằng nhựa tổng hợp, thủy tinh hay sành sứ có nắp đậy và quai xách.",
        "b": "B. Phải để trong các buồng riêng, ngoài axít ra chỉ được phép để dung dịch trung hoà; axít phải để trong các bình chuyên dùng bằng sắt mạ có nắp đậy và quai xách.",
        "c": "C. Phải để trong các buồng riêng, ngoài axít ra chỉ được phép để dung dịch trung hoà; axít phải để trong các bình chuyên dùng bằng nhựa tổng hợp, thủy tinh hay sành sứ có nắp đậy và quai xách.",
        "d": "D. Phải để trong các buồng riêng, ngoài axít ra chỉ được phép để dung dịch trung hoà; axít phải để trong các bình chuyên dùng bằng hợp kim nhôm có nắp đậy và quai xách.",
        "correct": "c"
    },
    {
        "q": "Câu 39: Theo Quy trình An toàn quy định pha chế a xit như thế nào?",
        "a": "A. Khi pha chế axít thành dung dịch phải rót từng tia nhỏ nước cất theo đũa thuỷ tinh vào bình axít và luôn luôn khuấy để toả nhiệt tốt.",
        "b": "B. Khi pha chế axít thành dung dịch phải dùng 2 vòi, cùng rót axít và nước cất vào bình nước cất và luôn luôn khuấy để toả nhiệt tốt.",
        "c": "C. Khi pha chế axít thành dung dịch phải rót từng tia nhỏ axít theo đũa sắt mạ vào bình nước cất và luôn luôn khuấy để toả nhiệt tốt.",
        "d": "D. Khi pha chế axít thành dung dịch phải rót từng tia nhỏ axít theo đũa thuỷ tinh vào bình nước cất và luôn luôn khuấy để toả nhiệt tốt.",
        "correct": "d"
    },
    {
        "q": "Câu 40: Theo Theo Quy trình An toàn thì điều cấm nào sau đây không đúng khi làm việc, sử dụng và pha chế ắc quy?",
        "a": "A. Cấm hút thuốc, sử dụng bật lửa, lò sưởi trong buồng chứa ắc-quy",
        "b": "B. Cấm để nước cất và dung dịch trung hoà ở chỗ cửa ra vào của buồng ắc-quy.",
        "c": "C. Cấm đổ nước cất vào axít để pha chế thành dung dịch.",
        "d": "D. Cấm rót axít vào nước cất để pha chế thành dung dịch.",
        "correct": "d"
    },
    {
        "q": "Câu 41: Nội dung huấn luyện an toàn cho người làm công việc xây lắp điện gồm?",
        "a": "A. Đào, đổ móng cột; lắp và dựng cột; rải, căng dây dẫn, dây chống sét; lắp thiết bị điện.",
        "b": "B. Đào, đổ móng cột; đào mương cáp ngầm; lắp, dựng cột; rải, căng dây dẫn, dây chống sét; lắp đặt thiết bị điện.",
        "c": "C. Đào, đổ móng cột; đào mương cáp ngầm; lắp và dựng cột; rải, căng dây dẫn, dây chống sét.",
        "d": "D. Đào mương cáp ngầm; lắp và dựng cột; rải, căng dây dẫn, dây chống sét; lắp thiết bị điện.",
        "correct": "b"
    },
    {
        "q": "Câu 42: Khi cách ly thiết bị để làm công việc sửa chữa, phần thiết bị tiến hành công việc cần phải?",
        "a": "A. Cách ly khỏi hệ thống từ mọi phía bằng cách đóng các van cách ly, mở các van xả đọng, xả khí; cắt nguồn lực, nguồn điều khiển các van; các đồng hồ chỉ thị đã chỉ đúng trạng thái.",
        "b": "B. Cách ly khỏi hệ thống từ phía đầu vào bằng cách đóng các van cách ly, mở các van xả đọng, xả khí; cắt nguồn lực, nguồn điều khiển các van; các đồng hồ chỉ thị đã chỉ đúng trạng thái.",
        "c": "C. Chỉ cần dừng hoạt động mà không cần phải thực hiện cách ly thiết bị từ mọi phía",
        "d": "D. Cách ly khỏi hệ thống từ mọi phía bằng cách đóng các van cách ly; cắt nguồn lực, nguồn điều khiển các van; các đồng hồ chỉ thị đã chỉ đúng trạng thái.",
        "correct": "a"
    },
    {
        "q": "Câu 43: Khi cắt tụ điện cao áp để sửa chữa, thực hiện như thế nào là đúng?",
        "a": "A. Dùng DCL cắt tụ điện và tiến hành sửa chữa.",
        "b": "B. Lấy mẫu dầu khi tụ điện đang vận hành trước khi cắt tụ điện ra sửa chữa.",
        "c": "C. Dùng máy cắt cắt tụ điện và tiến hành sửa chữa.",
        "d": "D. Phải phóng điện (xả điện tích) các tụ điện theo quy định, quy trình của đơn vị quản lý vận hành.",
        "correct": "d"
    },
    {
        "q": "Câu 44: Để đảm bảo thực hiện khối lượng thay sứ trong một công tác có cắt điện đường dây, do tổ QL đường dây & TBA thiếu nhân lực, lãnh đạo Đội QLĐLKV A đã điều động nhân lực từ tổ khác đến (không có chuyên môn nghiệp vụ về đường dây & TBA) tham gia công tác thay sứ trong ngày hôm đó. Theo anh/ chị việc điều động này như thế nào?",
        "a": "A. Ý 1 - Việc điều động này là phù hợp, đảm bảo tiến độ công việc, hạn chế thời gian mất điện.",
        "b": "B. Ý 2 - Việc điều động này có thể cho phép, với yêu cầu phải quy định các phạm vi công việc của nhân viên được điều động, ghi rõ trong phương án thi công được lãnh đạo đơn vị phê duyệt.",
        "c": "C. Ý 3 - Việc điều động này của lãnh đạo Đội QLĐLKV A đã vi phạm điều nghiêm cấm giao nhiệm vụ cho người chưa được học tập - huấn luyện, sát hạch về chuyên môn nghiệp vụ của nghề QL đường dây & TBA.",
        "d": "D. Cả Ý 1 và Ý 2 đều đúng.",
        "correct": "c"
    },
    {
        "q": "Câu 45: Trên đường về nhà sau khi kết thúc công việc, công nhân A phát hiện có sự cố do tiếp xúc xấu, gây phóng điện chập chờn trên lưới điện hạ thế của một trạm biến áp nằm trong khu vực của mình quản lý, công nhân A phải xử lý như thế nào?",
        "a": "A. Ý 1 - Lập tức leo lên cột để xử lý hiện tượng tiếp xúc xấu, đảm bảo cấp điện cho khách hàng.",
        "b": "B. Ý 2 - Thông báo tình hình sự cố với trực ban Đội QLĐLKV. Chỉ được tham gia xử lý sự cố nếu được lãnh đạo đơn vị giao nhiệm vụ và có Phiếu công tác/Lệnh công tác.",
        "c": "C. Ý 3 - Lập tức cắt trạm biến áp đang cấp điện khu vực đó, thông báo tình hình với trực ban đơn vị.",
        "d": "D. Thực hiện theo Ý 2 hoặc Ý 3.",
        "correct": "b"
    },
    {
        "q": "Câu 46: Khi đứng trên cột để thao tác tiếp địa lưu động với điện áp cao, người thực hiện phải sử dụng dụng cụ an toàn gì để thực hiện?",
        "a": "A. Găng tay cách điện và ủng cách điện đúng cấp điện áp.",
        "b": "B. Găng tay cách điện và Sào cách điện đúng cấp điện áp.",
        "c": "C. Găng tay cách điện, ủng cách điện và Sào cách điện đúng cấp điện áp.",
        "d": "D. Ủng cách điện và Sào cách điện đúng cấp điện áp.",
        "correct": "b"
    },
    {
        "q": "Câu 47: Công nhân A khi trèo lên cột điện bị vướng nhiều dây cáp viễn thông đi chung cột, công nhân A đã tháo dây choàng để xoay người thì bị trượt chân ngã cao. Qua tình huống này vi phạm nào là nguyên nhân trực tiếp dẫn đến tai nạn?",
        "a": "A. Không dùng thang để trèo cột.",
        "b": "B. Không đề nghị đơn vị điều xe nâng người đến để đưa người lên cột.",
        "c": "C. Sử dụng dây đeo an toàn không đúng quy định.",
        "d": "D. Sử dụng không đúng ty leo được quy định để trèo, khi trèo không cẩn thận, không bám vào những vật cố định chắc chắn để vượt chướng ngại vật.",
        "correct": "c"
    },
    {
        "q": "Câu 48: Đơn vị công tác đang vệ sinh bảo dưỡng đường dây đoạn từ cột 10 đến cột 30, Người chỉ huy trực tiếp phát hiện dây lèo tại cột 34 bị đứt nên yêu cầu 01 công nhân của Đơn vị công tác trèo lên nối lại lèo. Trong tình huống này người công nhân phải?",
        "a": "A. Thực hiện theo chỉ đạo của người chỉ huy trực tiếp để ngăn ngừa sự cố.",
        "b": "B. Thông báo cho nhân viên vận hành biết công việc thực hiện để không cho đóng điện lại sớm.",
        "c": "C. Từ chối thực hiện vì công việc trên nằm ngoài phạm vi công tác, không đảm bảo an toàn.",
        "d": "D. Từ chối thực hiện công việc trên vì không đảm bảo an toàn, nếu người chỉ huy trực tiếp không chấp thuận thì vẫn thực hiện nhưng sau đó báo cáo cấp trên để giải quyết.",
        "correct": "c"
    },
    {
        "q": "Câu 49: Những công việc nào sau đây được xem là công việc làm gần đường dây cao áp đang vận hành?",
        "a": "A. Công việc làm trên đoạn đường dây đã cắt điện, nhưng giao chéo với đường dây đang vận hành.",
        "b": "B. Công việc làm trên đường dây đã cắt điện nhưng đi chung cột với đường dây đang vận hành.",
        "c": "C. Công việc làm trên đoạn đường dây đã cắt điện nhưng có chiều dài từ 2,0 km trở lên đi bên cạnh hoặc đi song song với đường dây đang vận hành khác với khoảng cách nhỏ hơn quy định cho các cấp điện áp.",
        "d": "D. Tất cả các đáp án trên (dưới)",
        "correct": "d"
    },
    {
        "q": "Câu 50: Khi làm việc ở nhiều vị trí trên một đoạn đường dây điện trên không (không giao chéo hoặc đi song song với đường dây khác) không có nhánh rẽ, khoảng cách xa nhất giữa hai bộ nối đất không lớn hơn?",
        "a": "A. 1km",
        "b": "B. 1,5km",
        "c": "C. 2km",
        "d": "D. 2,5km",
        "correct": "c"
    },
    {
        "q": "Câu 51: Khi chỉ làm việc tại dây dẫn một pha của đường dây trên không (đi chung cột với đường dây cao áp khác đang vận hành) điện áp 110kV thì tại vị trí làm việc chỉ cần nối đất (để chống điện áp cảm ứng) dây dẫn của pha đó với điều kiện bảo đảm khoảng cách giữa các dây dẫn gần nhất của 2 mạch nhỏ nhất là bao nhiêu?",
        "a": "A. 3m",
        "b": "B. 4m",
        "c": "C. 5m",
        "d": "D. 6m",
        "correct": "b"
    },
    {
        "q": "Câu 52: Nối đất khi làm việc trên đường dây điện hạ áp cho phép?",
        "a": "A. Chập 3 dây pha lại với nhau.",
        "b": "B. Chập 3 pha và nối với dây trung tính.",
        "c": "C. Chập 3 pha với dây trung tính và nối với đất.",
        "d": "D. Chỉ cần chập 2 pha hai bên lại với nhau và nối với đất.",
        "correct": "c"
    },
    {
        "q": "Câu 53: Khi thi công kéo dây gần đường dây 35 kV đang vận hành, khoảng cách nhỏ nhất cho phép giữa dây cáp thép (cáp hãm, kẹp) và dây chằng thép tới dây dẫn của đường dây đang có điện là bao nhiêu?",
        "a": "A. Bằng chiều cao cột của đường đây 35 kV",
        "b": "B. 3 m.",
        "c": "C. 2,5 m.",
        "d": "D. 4 m.",
        "correct": "c"
    },
    {
        "q": "Câu 54: Khi làm việc trên đường dây đã cắt điện nhưng đi chung cột với đường dây đang vận hành, khoảng cách nhỏ nhất cho phép giữa các dây dẫn của hai mạch đường dây cấp điện áp 35 kV là bao nhiêu?",
        "a": "A. Không quy định.",
        "b": "B. 2m",
        "c": "C. 3m",
        "d": "D. 4m",
        "correct": "c"
    },
    {
        "q": "Câu 55: Khi kiểm tra định kỳ, nếu thấy dây dẫn điện đứt rơi xuống đất hoặc còn lơ lửng, thực hiện việc nào sau đây là đúng?",
        "a": "A. Không cho mọi người tới gần dưới 10 m, kể cả bản thân.",
        "b": "B. Không cho mọi người tới gần dưới 10 m, ngoại trừ bản thân.",
        "c": "C. Không cử người đứng gác nếu nơi có người qua lại.",
        "d": "D. Không báo ngay cho trực ca Điều độ.",
        "correct": "a"
    },
    {
        "q": "Câu 56: Trường hợp nào sau đây cấm làm việc trên đường dây đã cắt điện?",
        "a": "A. Ý 1 - Bắt đầu có gió cấp 6 trở lên hoặc có mưa nặng hạt, nước chảy thành dòng trên người và thiết bị.",
        "b": "B. Ý 2 - Có giông, bão hoặc sắp có giông, bão.",
        "c": "C. Ý 3 - Không có quy định.",
        "d": "D. Cả Ý 1 và Ý 2 đều đúng.",
        "correct": "d"
    },
    {
        "q": "Câu 57: Khi thi công dựng cột điện gần đường dây cao áp đang vận hành có cấp điện áp đến 220 kV, khoảng cách cho phép nhỏ nhất từ các dây cáp kéo và cáp hãm đến dây dẫn có điện là bao nhiêu?",
        "a": "A. Bằng chiều dài thân cột điện.",
        "b": "B. Khoảng cách nhỏ nhất cho phép 6 m.",
        "c": "C. Bằng 2 lần chiều dài thân cột điện.",
        "d": "D. Không quy định.",
        "correct": "b"
    },
    {
        "q": "Câu 58: Khi thi công dựng cột điện gần đường dây cao áp đang vận hành, mục nào sau đây đơn vị thi công đã thực hiện sai quy trình an toàn?",
        "a": "A. Ý 1 - Cho phép đặt các phương tiện trục kéo ngay phía dưới dây dẫn của đường dây cao áp đang vận hành.",
        "b": "B. Ý 2 - Nối đất thân của tời nâng cột, hãm cột và nối đất thân cột sắt đang được dựng.",
        "c": "C. Ý 3 - Khi dây chằng có nguy cơ dịch chuyển đến gần đường dây có điện với khoảng cách nhỏ hơn quy định mà không dùng dây chằng ngược để kéo lại.",
        "d": "D. Cả Ý 1 và Ý 3 đều đúng.",
        "correct": "d"
    },
    {
        "q": "Câu 59: Khi làm việc ở vị trí có độ cao hoặc độ sâu bao nhiêu so với mặt đất, nhân viên đơn vị công tác phải dùng các phương tiện lên xuống phù hợp?",
        "a": "A. Không quy định.",
        "b": "B. Trên 2 mét.",
        "c": "C. Từ 2,0 mét trở lên.",
        "d": "D. Từ 3,0 mét trở lên.",
        "correct": "c"
    },
    {
        "q": "Câu 60: Khi trèo lên cột làm việc, thực hiện các quy định nào sau đây là đúng?",
        "a": "A. Ý 1 - Kiểm tra sơ bộ tình trạng của móng cột và cột.",
        "b": "B. Ý 2 - Không cần sử dụng dây đeo an toàn.",
        "c": "C. Ý 3 - Trèo và làm việc ở phía đặt tay xà có sứ đỡ dây dẫn trên cột đơn.",
        "d": "D. Cả Ý 2 và Ý 3 đều đúng.",
        "correct": "a"
    },
    {
        "q": "Câu 61: Khi có gió cấp mấy thì cấm làm việc trên đường dây đã cắt điện?",
        "a": "A. Cấp 6 trở lên",
        "b": "B. Cấp 5 trở lên",
        "c": "C. Cấp 4 trở lên",
        "d": "D. Cấp 3 trở lên",
        "correct": "a"
    },
    {
        "q": "Câu 62: Khi thi công dựng cột điện gần đường dây cao áp đang vận hành, phương pháp đặt dây cáp kéo, cáp hãm như thế nào để đảm bảo an toàn?",
        "a": "A. Ý 1 - Dây cáp kéo và cáp hãm phải bố trí sao cho khi dây cáp bị bật, đứt không thể văng về phía đường dây đang vận hành.",
        "b": "B. Ý 2 - Dây cáp kéo, cáp hãm phải được buộc, móc vào đường dây đang vận hành.",
        "c": "C. Ý 3 - Không có biện pháp néo giữ dây cáp kéo, cáp hãm.",
        "d": "D. Cả Ý 2 và Ý 3 đều đúng.",
        "correct": "a"
    },
    {
        "q": "Câu 63: Khi dựng cột điện ở gần đường dây cao áp có cấp điện áp 35 kV đang vận hành, khoảng cách cho phép nhỏ nhất từ dây chằng đến dây dẫn có điện là bao nhiêu?",
        "a": "A. Khoảng cách nhỏ nhất cho phép 4 m.",
        "b": "B. Bằng chiều dài thân cột điện",
        "c": "C. Bằng 2 lần chiều dài thân cột điện.",
        "d": "D. Không quy định.",
        "correct": "a"
    },
    {
        "q": "Câu 64: Khi lắp đặt ở trên cột của đường dây điện trên không cao áp nhiều mạch đang vận hành, các vật tư, dụng cụ nhỏ được kéo lên cột hoặc thả xuống đất bằng phương pháp nào?",
        "a": "A. Các vật tư, dụng cụ nhỏ được kéo lên hoặc thả xuống bằng dây có khả năng chịu lực, có biện pháp đảm bảo dây không bị bung, văng lên đường dây đang mang điện.",
        "b": "B. Cho phép tung ném các vật tư, dụng cụ nhỏ lên cao nhưng phải đảm bảo không va trúng đường dây.",
        "c": "C. Các chi tiết nhỏ và dụng cụ làm việc phải dùng dây thừng vô tận khi kéo lên cột hoặc thả xuống đất, chỉ được phép tháo ra khỏi dây này sau khi đã được đặt vào vị trí và bắt chặt vào cột. Dụng cụ, đồ nghề phải đựng trong túi chuyên dùng.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "c"
    },
    {
        "q": "Câu 65: Khi làm việc trên  đoạn đường dây (đường dây) đã cắt điện có chiều dài từ 2 km đi song song với đường dây 110 kV đang vận hành; khoảng cách giữa hai đường dây là bao nhiêu thì được gọi là công việc làm gần đường dây đang vận hành?",
        "a": "A. Nhỏ hơn 150 m.",
        "b": "B. Nhỏ hơn 100 m.",
        "c": "C. Nhỏ hơn 300 m.",
        "d": "D. Nhỏ hơn 400 m.",
        "correct": "b"
    },
    {
        "q": "Câu 66: Khi làm việc trên  đoạn đường dây đã cắt điện có chiều dài từ 2 km trở lên đi song song với đường dây 500 kV đang vận hành; khoảng cách giữ hai đường dây là bao nhiêu thì được gọi là công việc làm gần đường dây đang vận hành?",
        "a": "A. Nhỏ hơn 300 m.",
        "b": "B. Nhỏ hơn 200 m.",
        "c": "C. Nhỏ hơn 500 m.",
        "d": "D. Không quy định.",
        "correct": "b"
    },
    {
        "q": "Câu 67: Khi thi công dựng cột điện gần đường dây cao áp đang vận hành có cấp điện áp đến 500 kV, khoảng cách cho phép nhỏ nhất từ các dây cáp kéo và cáp hãm đến dây dẫn có điện là bao nhiêu?",
        "a": "A. Bằng chiều dài thân cột điện.",
        "b": "B. Bằng 3 lần chiều dài thân cột điện.",
        "c": "C. Khoảng cách nhỏ nhất cho phép 8 m.",
        "d": "D. Không quy định.",
        "correct": "c"
    },
    {
        "q": "Câu 68: Khi làm việc ở trên cột của đường dây điện trên không cao áp nhiều mạch khi các mạch còn lại đang vận hành, khoảng cách nhỏ nhất từ người (kể cả dụng cụ khi cầm, mang) đến dây dẫn có điện cấp điện áp đến 35kV quy định là?",
        "a": "A. Gấp hai lần chiều dài cánh tay người làm việc kèm dụng cụ.",
        "b": "B. 0,6 m.",
        "c": "C. Gấp hai lần chiều cao trung bình của người làm việc.",
        "d": "D. Không quy định.",
        "correct": "b"
    },
    {
        "q": "Câu 69: Khi làm việc ở trên cột của đường dây điện trên không cao áp nhiều mạch khi các mạch còn lại đang vận hành, khoảng cách nhỏ nhất từ người (kể cả dụng cụ khi cầm, mang) đến dây dẫn có điện cấp điện áp trên 35kV đến 110kV quy định là?",
        "a": "A. Gấp hai lần chiều dài cánh tay người làm việc.",
        "b": "B. Gấp hai lần chiều dài cánh tay người làm việc kèm dụng cụ.",
        "c": "C. 1,0 m.",
        "d": "D. Không quy định.",
        "correct": "c"
    },
    {
        "q": "Câu 70: Lắp đặt dây dẫn ở đường dây điện trên không cao áp nhiều mạch khi các mạch còn lại đang vận hành, việc chuyển dây dẫn từ ròng rọc sang khóa đỡ và việc nối đầu dây dẫn ở dây lèo cột néo hoặc cột đảo pha như thế nào là đúng?",
        "a": "A. Ý 1 - Có thể tiến hành trên xe nâng, xe thang hoặc khi thả dây dẫn xuống đất. Nếu thả dây xuống đất thì vẫn phải nối đất dây dẫn mới được làm việc.",
        "b": "B. Ý 2 - Không được tiến hành trên xe nâng, xe thang",
        "c": "C. Ý 3 - Không được tiến hành khi thả dây dẫn xuống đất, kể cả trường hợp dây dẫn vẫn được nối đất.",
        "d": "D. Cả Ý 2 và Ý 3 đều đúng.",
        "correct": "a"
    },
    {
        "q": "Câu 71: Khi làm việc trên  đoạn đường dây (đường dây) đã cắt điện có chiều dài từ 2 km đi song song với đường dây 220 kV đang vận hành; khoảng cách giữa hai đường dây là bao nhiêu thì được gọi là công việc làm gần đường dây đang vận hành?",
        "a": "A. Nhỏ hơn 100 m.",
        "b": "B. Nhỏ hơn 150 m.",
        "c": "C. Nhỏ hơn 200 m.",
        "d": "D. Nhỏ hơn 300 m.",
        "correct": "b"
    },
    {
        "q": "Câu 72: Khi làm việc trên đường dây đã cắt điện nhưng đi chung cột với đường dây đến 35kV đang vận hành, những công việc và điều kiện nào sau đây không được phép thực hiện?",
        "a": "A. Ý 1 - Khi khoảng cách nhỏ nhất giữa các dây dẫn của 2 mạch > 3m và có áp dụng các biện pháp ngăn ngừa vi phạm khoảng cách an toàn.",
        "b": "B. Ý 2 - Làm việc khi đang có gió cấp 4 trở lên.",
        "c": "C. Ý 3 - Ra dây trên cột, cuộn dây dẫn thành cuộn trên cột, dùng thước đo bằng kim loại.",
        "d": "D. Cả Ý 2 và Ý 3 đều đúng.",
        "correct": "d"
    },
    {
        "q": "Câu 73: Khi làm việc trên đường dây đã cắt điện đi chung cột với đường dây đang vận hành, nội dung nào sau đây vi phạm quy định an toàn?",
        "a": "A. Ra dây dẫn, cuộn dây dẫn thành cuộn trên cột, dùng thước đo bằng kim loại.",
        "b": "B. Có biện pháp thi công đã đảm bảo đường dây cắt điện không bung, văng vào đường dây đang vận hành.",
        "c": "C. Dùng dây trực tiếp hoặc qua pu-ly để đưa dụng cụ, vật liệu lên cao hoặc hạ xuống với khoảng cách an toàn.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "a"
    },
    {
        "q": "Câu 74: Khi làm việc trên đường dây đã cắt điện nhưng đi chung cột với đường dây đang vận hành, các nội dung công tác an toàn nào thuộc trách nhiệm của người chỉ huy trực tiếp?",
        "a": "A. Kiểm tra đúng tuyến dây đã cắt điện.",
        "b": "B. Cho treo đầy đủ các loại biển báo an toàn, cờ để treo ở các cột 2 đường dây đi chung.",
        "c": "C. Thực hiện đủ, đúng những biện pháp an toàn khi trèo cao.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "d"
    },
    {
        "q": "Câu 75: Khi thi công dựng cột điện gần đường dây cao áp đang vận hành, mục nào sau đây đơn vị thi công đã vi phạm quy trình an toàn?",
        "a": "A. Người chỉ huy trực tiếp có bậc 4 an toàn điện.",
        "b": "B. Đặt phương tiện trục kéo ngay phía dưới dây dẫn của đường dây cao áp đang vận hành.",
        "c": "C. Dùng dây chằng kéo ngược lại để tránh nguy cơ dịch chuyển về đường dây đang vận hành.",
        "d": "D. Tiếp đất thân của tời nâng cột, hãm cột.",
        "correct": "b"
    },
    {
        "q": "Câu 76: Khi thi công dựng cột điện gần đường dây cao áp đang vận hành, mục nào sau đây đơn vị thi công đã vi phạm quy trình an toàn?",
        "a": "A. Toàn bộ dây chằng bằng kim loại khi đang dựng cột sắt không nối đất.",
        "b": "B. Người chỉ huy trực tiếp có bậc 4 an toàn điện.",
        "c": "C. Đặt phương tiện trục kéo bên ngoài trục đường dây đang vận hành.",
        "d": "D. Dùng dây chằng kéo ngược lại để tránh nguy cơ dịch chuyển về đường dây đang vận hành.",
        "correct": "a"
    },
    {
        "q": "Câu 77: Thực hiện lấy độ võng dây dẫn khi thi công lắp đặt trên đường dây điện trên không cao áp nhiều mạch khi các mạch còn lại đang vận hành, biện pháp nào dưới đây có nguy cơ mất an toàn?",
        "a": "A. Ý 1 - Tại các vị trí cột bê tông ly tâm, ròng rọc kéo dây phải được nối đất riêng.",
        "b": "B. Ý 2 - Nhân viên đơn vị công tác cầm trực tiếp vào dây dẫn để lấy độ võng.",
        "c": "C. Ý 3 - Dây dẫn thả xuống đất để bắt khoá kéo dây được nối đất ngay tại vị trí khoá kéo dây.",
        "d": "D. Cả Ý 1 và Ý 3 có nguy cơ mất an toàn.",
        "correct": "b"
    },
    {
        "q": "Câu 78: Lắp đặt dây dẫn ở đường dây điện trên không cao áp nhiều mạch khi các mạch còn lại đang vận hành, trong quá trình lấy độ võng người chỉ huy trực tiếp phải?",
        "a": "A. Chỉ có biện pháp để phòng nhân viên đơn vị công tác chạm phải dây dẫn.",
        "b": "B. Chỉ có biện pháp để phòng người ngoài chạm phải dây dẫn.",
        "c": "C. Có biện pháp đề phòng nhân viên đơn vị công tác và người ngoài chạm phải dây dẫn.",
        "d": "D. Tất cả các đáp án trên (dưới) đều sai",
        "correct": "c"
    },
    {
        "q": "Câu 79: Khi thi công lắp đặt dây dẫn trên đường dây điện trên không cao áp nhiều mạch, khi các mạch còn lại đang vận hành, biện pháp đấu lèo tại các vị trí đảo pha nào sau đây tuân thủ quy định an toàn?",
        "a": "A. Nối đất cả 03 dây dẫn về hai phía cột bằng 06 dây nối đất (mỗi đầu dây dẫn phải đấu một đầu dây nối đất). Cả 06 dây nối đất này đều phải đấu vào một cọc nối đất chung.",
        "b": "B. Chỉ cần nối đất 03 dây dẫn về một phía bằng 03 sợi tiếp đất.",
        "c": "C. Sử dụng 03 dây tiếp đất để nối cho dây dẫn, sử dụng 03 dây lèo phụ để đảm bảo toàn bộ các dây dẫn đều được nối đất chung vào hệ thống.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "a"
    },
    {
        "q": "Câu 80: Thực hiện nối đất tại các vị trí cột đang thi công như thế nào đúng với quy định an toàn khi thực hiện lấy độ võng dây dẫn đang lắp đặt trên đường dây điện trên không cao áp nhiều mạch, khi các mạch còn lại đang vận hành?",
        "a": "A. Chỉ nối đất dây dẫn tại cột trung gian.",
        "b": "B. Nối đất dây dẫn đang lắp đặt tại cột néo tiến hành kéo dây.",
        "c": "C. Phải nối đất dây dẫn tại tất cả các vị trí cột trong khoảng néo.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "b"
    },
    {
        "q": "Câu 81: Yêu cầu của nhân viên đơn vị công tác khi thực hiện công việc sửa chữa trên đường dây đã cắt điện?",
        "a": "A. Ý 1 - Phải đảm bảo sức khỏe để làm việc trên cao.",
        "b": "B. Ý 2 - Phải là những công nhân chuyên nghiệp.",
        "c": "C. Ý 3 - Phải là những công nhân chuyên nghiệp, phải đủ sức khỏe để làm việc trên cao.",
        "d": "D. Chỉ cần yêu cầu theo Ý 1 hoặc Ý 2",
        "correct": "c"
    },
    {
        "q": "Câu 82: Khi thực hiện sửa chữa, thay thế đường dây dẫn điện rẽ vào hộ phụ tải, cần thực hiện biện pháp nào để đảm bảo an toàn?",
        "a": "A. Không cần phải cắt điện cả đường dây trục chính hạ áp đó mà chỉ phải tháo đầu dây đấu vào đường dây trục chính và cắt cầu dao ở cuối nhánh rẽ đi vào các hộ phụ tải.",
        "b": "B. Thực hiện cắt Áp tô mát, làm biện pháp an toàn đối với đường dây trục chính mà có đường dây nhánh rẽ vào hộ phụ tải đấu nối.",
        "c": "C. Thực hiện tách lèo, cô lập đoạn đường dây trục chính phía trước vị trí mà đường dây nhánh rẽ vào hộ phụ tải đấu nối.",
        "d": "D. Thực hiện tách lèo, cô lập đoạn đường dây trục chính phía sau vị trí mà đường dây nhánh rẽ vào hộ phụ tải đấu nối.",
        "correct": "a"
    },
    {
        "q": "Câu 83: Biện pháp an toàn để ngăn ngừa dây dẫn bật lên trên đường dây có điện khi thực hiện tháo hay lắp dây dẫn?",
        "a": "A. Sử dụng dây thừng choàng qua dây dẫn ở cả hai đầu và ghì xuống đất.",
        "b": "B. Sử dụng dây thừng choàng qua đầu dây dẫn có nguy cơ bật lên đường dây có điện và ghì xuống đất.",
        "c": "C. Sử dụng dây thừng choàng qua dây dẫn và ghì xuống đất.",
        "d": "D. Quá trình thực hiện tháo hay lắp dây dẫn phải thực hiện thận trong không để dây dẫn bật lên đường dây có điện.",
        "correct": "a"
    },
    {
        "q": "Câu 84: Khi thi công, khoảng cách nhỏ nhất cho phép giữa dây cáp thép (cáp hãm, kéo) và dây chằng thép tới dây dẫn của đường dây điện trên không cấp điện áp đến 35 kV đang có điện là bao nhiêu?",
        "a": "A. 2m",
        "b": "B. 2,5m",
        "c": "C. 3m",
        "d": "D. 3,5m",
        "correct": "b"
    },
    {
        "q": "Câu 85: Khi sửa chữa trên đường dây đã cắt điện nhưng giao chéo hoặc song song với đường dây đang vận hành phải thực hiện những quy định sau đây?",
        "a": "A. Thực hiện cắt điện và làm biện pháp an toàn đối với các đường dây có giao chéo hoặc song song với đường dây sẽ làm việc.",
        "b": "B. Thực hiện gắn cảnh báo ở tất cả các đường dây có giao chéo hoặc song song với đường dây sẽ làm việc để nhân viên công tác biết phòng tránh vi phạm khoảng cách an toàn.",
        "c": "C. Nếu người và phương tiện làm việc không vi phạm khoảng cách an toàn cho phép hoặc áp dụng các biện pháp an toàn phòng tránh khác thì không phải cắt điện đường dây ở gần với đường dây sẽ làm việc.",
        "d": "D. Không thực hiện cắt điện và làm biện pháp an toàn đối với các đường dây có giao chéo hoặc song song với đường dây sẽ làm việc, nhưng tại các vị trí có giao chéo, hoặc song song với đường dây đang vận hành phải cử người giám sát an toàn điện.",
        "correct": "c"
    },
    {
        "q": "Câu 86: Khi tháo hoặc nối dây trong khoảng cột giao chéo với đường dây đang vận hành, cần thực hiện biện pháp an toàn nào sau đây?",
        "a": "A. Biện pháp 1 - Phải thực hiện cắt điện các đường dây ở phía dưới đường dây sửa chữa.",
        "b": "B. Biện pháp 2 - Thực hiện biện pháp che chắn cách điện đối với các đường dây ở phía dưới đường dây sửa chữa.",
        "c": "C. Biện pháp 3 - Thực hiện biện pháp căng, néo đối với đường dây sửa chữa để phòng tránh dây dẫn bị tuột xuống vi phạm khoảng cách an toàn với các đường dây ở phía dưới.",
        "d": "D. Thực hiện kết hợp cả hai biện pháp 2 và 3.",
        "correct": "a"
    },
    {
        "q": "Câu 87: Khi thi công, khoảng cách nhỏ nhất cho phép giữa dây cáp thép (cáp hãm, kéo) và dây chằng thép tới dây dẫn của đường dây điện trên không cấp điện áp đến 110 kV đang có điện là bao nhiêu?",
        "a": "A. 2m",
        "b": "B. 2,5m",
        "c": "C. 3m",
        "d": "D. 3,5m",
        "correct": "c"
    },
    {
        "q": "Câu 88: Khi thực hiện lắp đặt ở trên cột của đường dây điện trên không nhiều mạch đang vận hành, tuân thủ những quy định nào sau đây?",
        "a": "A. Cấm dùng thước làm bằng thép (kim loại) để đo.",
        "b": "B. Không buông thõng tự do các đầu dây thừng.",
        "c": "C. Cấm trèo lên cột ở phía dây dẫn có điện.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "d"
    },
    {
        "q": "Câu 89: Khi thực hiện công việc căng, kéo dây đường dây điện trên không (ĐDK) cao áp đến 35 kV đã cắt điện nhưng phía dưới có ĐDK hạ áp đi chung cột đang vận hành, phải thực hiện như thế nào để đúng quy định?",
        "a": "A. Ý 1 - Không phải cắt điện đối với ĐDK hạ áp ở phía dưới nhưng quá trình thi công ĐDK cao áp phía trên có thể va chạm mà không ảnh hưởng đến vỏ bọc cách điện đối với đường dây hạ áp phía dưới.",
        "b": "B. Ý 2 - Cắt điện và làm đầy đủ các biện pháp an toàn đối với ĐDK hạ áp ở phía dưới nếu quá trình thi công ĐDK cao áp có khả năng va chạm với đường dây hạ áp phía dưới.",
        "c": "C. Ý 3 - Trường hợp không thể cắt điện ĐDK hạ áp ở phía dưới để thi công ĐDK cao áp phía trên thì phải được lập thành phương án cụ thể và được Cấp có thẩm quyền phê duyệt.",
        "d": "D. Thực hiện Ý 2 hoặc Ý 3",
        "correct": "d"
    },
    {
        "q": "Câu 90: Khi tháo hoặc nối dây trong khoảng cột giao chéo với đường dây đang vận hành ở phía dưới, trường hợp không thể cắt điện các đường dây ở phía dưới thì thực hiện như thế nào để đúng quy định?",
        "a": "A. Cho phép làm giàn giáo để cách ly với đường dây đang có điện ở phía bên dưới; Giàn giáo phải đảm bảo khoảng cách an toàn đối với đường dây có điện.",
        "b": "B. Cho phép thực hiện che chắn đảm bảo cách điện đối với các đường dây ở phía dưới đường dây sửa chữa.",
        "c": "C. Cho phép làm giàn giáo để cách ly với đường dây đang có điện ở phía bên dưới; Giàn giáo phải đảm bảo tiêu chuẩn quy định và đảm bảo khoảng cách an toàn đối với đường dây có điện.",
        "d": "D. Thực hiện căng, néo đối với đường dây sửa chữa để phòng tránh dây dẫn bị tuột xuống vi phạm khoảng cách an toàn với các đường dây có điện ở phía dưới.",
        "correct": "c"
    },
    {
        "q": "Câu 91: Khi sữa chữa trên đường dây đã cắt điện nhưng đi chung cột với đường dây 22 kV đang vận hành, khoảng cách nhỏ nhất theo quy định giữa các dây dẫn gần nhất của hai mạch là bao nhiêu?",
        "a": "A. 1m",
        "b": "B. 2m",
        "c": "C. 3m",
        "d": "D. 4m",
        "correct": "c"
    },
    {
        "q": "Câu 92: Khi sữa chữa trên đường dây đã cắt điện nhưng đi chung cột với đường dây đang vận hành phải thực hiện những quy định nào sau đây?",
        "a": "A. Người chỉ huy trực tiếp phải kiểm tra đúng tuyến đường dây đã được cắt điện.",
        "b": "B. Người chỉ huy trực tiếp phải kiểm tra đúng tuyến đường dây đã được cắt điện, đồng thời phải có đủ các loại biển báo an toàn, cờ để treo ở các cột hai đường dây đi chung và thực hiện đủ, đúng các biện pháp an toàn khi trèo cao quy định trong Quy trình an toàn.",
        "c": "C. Phải có đủ các loại biển báo an toàn, cờ để treo ở các cột hai đường dây đi chung và thực hiện đủ, đúng các biện pháp an toàn khi trèo cao quy định trong Quy trình an toàn.",
        "d": "D. Người chỉ huy trực tiếp phải kiểm tra đúng tuyến đường dây đã được cắt điện, thực hiện đủ và đúng các biện pháp an toàn khi trèo cao quy định trong Quy trình an toàn.",
        "correct": "b"
    },
    {
        "q": "Câu 93: Trước khi trèo lên giá đỡ, cột; nhân viên đơn vị công tác phải kiểm tra sơ bộ nội dung nào?",
        "a": "A. Tình trạng của bệ đỡ, giá đỡ, cột.",
        "b": "B. Ví trí của giá đỡ và đường trèo lên an toàn, kết cấu hoặc dây dẫn trên cột.",
        "c": "C. Xác định các trang thiết bị an toàn, bảo hộ lao động cần thiết.",
        "d": "D. Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "d"
    },
    {
        "q": "Câu 94: Khi dựng, hạ cột quy định khoảng cách nhỏ nhất cho phép từ dây chằng đến dây dẫn có điện đối với cấp điện áp 35 kV là bao nhiêu mét ?",
        "a": "A. 4,0 mét",
        "b": "B. 6,0 mét",
        "c": "C. 1,0 mét.",
        "d": "D. 3,0 mét.",
        "correct": "a"
    },
    {
        "q": "Câu 95: Khi dựng, hạ cột quy định khoảng cách nhỏ nhất cho phép từ dây chằng đến dây dẫn có điện đối với cấp điện áp 110 kV là bao nhiêu mét ?",
        "a": "A. 6,0 mét",
        "b": "B. 4,0 mét",
        "c": "C. 1,0 mét.",
        "d": "D. 3,0 mét.",
        "correct": "a"
    },
    {
        "q": "Câu 96: Khi dựng, hạ cột quy định khoảng cách nhỏ nhất cho phép từ dây chằng đến dây dẫn có điện đối với cấp điện áp 22 kV là bao nhiêu mét ?",
        "a": "A. 4,0 mét",
        "b": "B. 6,0 mét",
        "c": "C. 1,0 mét.",
        "d": "D. 3,0 mét.",
        "correct": "a"
    },
    {
        "q": "Câu 97: Khi dựng, hạ cột quy định khoảng cách nhỏ nhất cho phép từ dây chằng đến dây dẫn có điện đối với cấp điện áp 10 kV là bao nhiêu mét ?",
        "a": "A. 4,0 mét",
        "b": "B. 6,0 mét",
        "c": "C. 1,0 mét.",
        "d": "D. 3,0 mét.",
        "correct": "a"
    },
    {
        "q": "Câu 98: Khi dựng, hạ cột quy định khoảng cách nhỏ nhất cho phép từ dây chằng đến dây dẫn có điện đối với cấp điện áp 6 kV là bao nhiêu mét ?",
        "a": "A. 4,0 mét",
        "b": "B. 6,0 mét",
        "c": "C. 1,0 mét.",
        "d": "D. 3,0 mét.",
        "correct": "a"
    },
    {
        "q": "Câu 99: Khi nâng, hạ cột phải nối đất các phần nào dưới đây ?",
        "a": "A. Thân của tời nâng, hãm cột; Toàn bộ dây chằng bằng kim loại nếu là cột đang dựng bằng sắt.",
        "b": "B. Phải nối đất dây dẫn đang lắp đặt tại cột néo tiến hành kéo dây",
        "c": "C. Phải nối đất cả 03 dây dẫn về hai phía cột bằng 06 dây nối đất (mỗi đầu dây dẫn phải đấu một đầu dây nối đất). Cả 06 dây nối đất này đều phải đấu vào một cọc nối đất chung.",
        "d": "D. Tất cả các đáp án trên (dưới).",
        "correct": "a"
    },
    {
        "q": "Câu 100: Các biện pháp đảm bảo an toàn phải thực hiện khi nâng, hạ cột được quy định như thế nào ?",
        "a": "A. Tất cả các đáp án trên (dưới).",
        "b": "B. Thân của tời nâng, hãm cột và toàn bộ dây chằng bằng kim loại nếu là cột đang dựng bằng sắt phải được nối đất.",
        "c": "C. Khi dựng, hạ cột phải áp dụng các biện pháp cần thiết nhằm tránh làm nghiêng hoặc đổ cột.",
        "d": "D. Khi dựng, hạ cột gần với ĐDK cao áp có điện, phải áp dụng các biện pháp phù hợp để không để xảy ra tai nạn do vi phạm khoảng cách an toàn theo cấp điện áp của ĐDK.",
        "correct": "a"
    },
    {
        "q": "Theo quy trình an toàn, khi thay thế công tơ 220/380V, nếu không thể đảm bảo an toàn, việc cắt điện phải được thực hiện khi:",
        "a": "Nhân viên thi công đã có đủ 02 người.",
        "b": "Không thể che chắn, chống chạm chập cho các phần mang điện hở.",
        "c": "Công tơ cũ đã bị hư hỏng.",
        "d": "Công tơ mới là loại 3 pha.",
        "correct": "b"
    },
    {
        "q": "Theo quy trình an toàn, khi kiểm tra mạch đo lường đang có điện, nhân viên cần phải đặc biệt lưu ý và không làm ảnh hưởng đến bộ phận nào của máy biến dòng điện, máy biến điện áp?",
        "a": "Các cuộn dây sơ cấp.",
        "b": "Các đầu nối cáp lực.",
        "c": "Bộ phận nối đất phía thứ cấp",
        "d": "Bộ phận bảo vệ quá tải.",
        "correct": "c"
    },
    {
        "q": "Theo quy trình an toàn, yêu cầu nào sau đây không phải là biện pháp an toàn khi làm việc ở các mạch đo lường, điều khiển, bảo vệ đang có điện?",
        "a": "Tất cả các cuộn dây thứ cấp của BI, BU phải có dây nối đất cố định.",
        "b": "Cấm để hở mạch cuộn thứ cấp của BI.",
        "c": "Cấm để ngắn mạch cuộn thứ cấp của BU.",
        "d": "Buộc phải cắt điện toàn bộ thiết bị đo đếm.",
        "correct": "d"
    },
    {
        "q": "Theo quy trình an toàn, khi thao tác với thiết bị đo lường (máy biến dòng điện) đang có điện, nhân viên cần đảm bảo:",
        "a": "Tháo các cầu chì bảo vệ.",
        "b": "Nối tắt các tín hiệu điều khiển.",
        "c": "Không để hở mạch phía thứ cấp của máy biến dòng điện.",
        "d": "Kiểm tra dòng điện phía sơ cấp.",
        "correct": "c"
    },
    {
        "q": "Theo quy trình an toàn, khi thay thế công tơ tại cấp điện áp hạ áp, nếu không thực hiện được việc nối đất, công tác này được xem là loại công tác nào?",
        "a": "Công tác thường xuyên.",
        "b": "Công tác cần phải có Giấy phối hợp.",
        "c": "Công tác có rủi ro Cấp 1",
        "d": "Công tác sửa chữa có điện (hotline) theo quy trình được phê duyệt.",
        "correct": "d"
    },
    {
        "q": "Theo quy trình an toàn, khi thay thế công tơ/hộp công tơ tại cấp điện áp 220/380V, nếu đã cắt điện, điều kiện nào sau đây không bắt buộc phải thỏa mãn để cho phép không cần nối đất di động?",
        "a": "Thiết bị điện có cấu trúc gọn, quan sát toàn bộ dễ dàng.",
        "b": "Có thể cách ly hoàn toàn khỏi lưới điện bằng thiết bị đóng cắt mà đứng tại chỗ nhìn thấy rõ khoảng hở.",
        "c": "Chắc chắn không có hiện tượng cảm ứng điện từ",
        "d": "Thiết bị có điện áp danh định dưới 10 kV",
        "correct": "d"
    },
    {
        "q": "Theo quy trình an toàn, khi kiểm tra đo đếm (lấy mẫu dầu máy biến áp) khi máy biến áp đang vận hành, điều kiện an toàn đầu tiên cần chú ý là gì?",
        "a": "Phải có ít nhất 02 người thực hiện.",
        "b": "Kiểm tra nồng độ khí cháy.",
        "c": "Kiểm tra nối đất vỏ máy trước.",
        "d": "Sử dụng sào cách điện.",
        "correct": "c"
    },
    {
        "q": "Theo quy trình an toàn, khi thay thế công tơ 220/380V, nếu vị trí không đảm bảo khô ráo, nhân viên cần thực hiện biện pháp an toàn nào?",
        "a": "Chỉ cần đứng trên tấm gỗ khô.",
        "b": "Chỉ cần đi ủng cao su.",
        "c": "Bắt buộc phải cắt điện.",
        "d": "Sử dụng phương tiện bay để tiếp cận.",
        "correct": "c"
    },
    {
        "q": "Theo quy trình an toàn, trong công tác kiểm tra đo đếm khi thiết bị vẫn có điện, công việc nào sau đây được phép thực hiện khi đảm bảo khoảng cách an toàn?",
        "a": "Thay máy biến dòng điện.",
        "b": "Tháo dây thứ cấp máy biến áp đo lường.",
        "c": "Đo dòng điện bằng ampe kìm.",
        "d": "Thay tụ bù.",
        "correct": "c"
    },
    {
        "q": "Theo quy trình an toàn, khi thay thế công tơ do bị hư hỏng, nếu công tơ nằm trên đường dây hạ áp đi chung cột với đường dây cao áp, để đảm bảo an toàn, cần phải kiểm tra điều kiện gì trước khi làm việc?",
        "a": "Chỉ cần kiểm tra công tơ mới.",
        "b": "Kiểm tra khoảng cách từ chỗ làm việc trên ĐDK hạ áp đến ĐDK cao áp đi chung cột đó đảm bảo an toàn.",
        "c": "Bắt buộc phải cắt điện đường dây cao áp",
        "d": "Chỉ cần cắt điện đường dây hạ áp",
        "correct": "b"
    },
    {
        "q": "Theo quy trình an toàn, khi thay thế công tơ tại cấp hạ áp đi chung cột với ĐD cao áp, nếu không có biện pháp đảm bảo khoảng cách an toàn, giải pháp bắt buộc là gì?",
        "a": "Dùng thang cách điện",
        "b": "Chỉ cần cắt điện đường dây hạ áp",
        "c": "Phải cắt điện cả 02 ĐDK cao áp và hạ áp.",
        "d": "Dùng sào cách điện để làm việc",
        "correct": "c"
    },
    {
        "q": "Theo quy trình an toàn, khi thao tác trên các thiết bị đo lường (BI/BU) có nguy cơ rò rỉ điện hoặc hỏng hóc, hành động nào sau đây là cần thiết để bảo vệ an toàn cho người thao tác?",
        "a": "Rút phích cắm khỏi ổ điện.",
        "b": "Sử dụng giày, ủng cách điện hoặc đứng trên thảm cách điện.",
        "c": "Chỉ cần đeo găng tay vải.",
        "d": "Đảm bảo phòng làm việc luôn kín.",
        "correct": "b"
    },
    {
        "q": "Theo quy trình an toàn, khi thay thế công tơ có kèm theo việc thay chì trên cột, công việc chỉ được phép tiến hành khi trời có điều kiện nào?",
        "a": "Trời tối.",
        "b": "Gió cấp 5.",
        "c": "Mưa nhỏ hạt.",
        "d": "Trời khô ráo, không có giông, gió to, sấm sét.",
        "correct": "d"
    },
    {
        "q": "Theo quy trình an toàn, khi thay định kỳ công tơ có kèm theo thay chì trên cột trong điều kiện mưa nhỏ hạt, việc đảm bảo an toàn cần thiết nào sau đây là quan trọng nhất?",
        "a": "Cắt điện toàn bộ.",
        "b": "Chỉ cần một người làm việc.",
        "c": "Quần áo người công nhân phải khô ráo, cột có chỗ đứng chắc chắn.",
        "d": "Dùng sào cách điện để thay chì.",
        "correct": "c"
    },
    {
        "q": "Trường hợp khẩn cấp không thể trì hoãn được (cháy hoặc có nguy cơ đe dọa đến tính mạng con người hoặc an toàn thiết bị), cho phép nhân viên vận hành thao tác 01 người với điều kiện nào sau đây?",
        "a": "Không cần điều kiện, nhưng sau khi thao tác xong phải báo cáo ngay cho nhân viên vận hành cấp trên biết.",
        "b": "Phải báo cáo cho nhân viên vận hành cấp trên biết và thực hiện theo mệnh lệnh.",
        "c": "Thao tác bằng điều khiển từ xa thông qua mạch nhị thứ hoặc màn hình điều khiển, các thao tác này không có nguy cơ gây tai nạn cho nhân viên vận hành, sau khi xử lý xong phải báo ngay cho nhân viên vận hành cấp trên trực tiếp.",
        "d": "Không được thao tác 01 người trong bất cứ trường hợp nào.",
        "correct": "a"
    },
    {
        "q": "Trường hợp khẩn cấp không thể trì hoãn được (cháy hoặc có nguy cơ đe dọa đến tính mạng con người hoặc an toàn thiết bị), cho phép nhân viên vận hành thao tác 01 người với điều kiện nào sau đây?",
        "a": "Trường hợp thao tác tại chỗ thiết bị điện, thiết bị chữa cháy hoặc thiết bị phụ trợ khác được hỗ trợ giám sát thao tác từ xa thông qua hệ thống camera giám sát vận hành. Người giám sát  phải quan sát được toàn bộ thiết bị (phải kiểm tra lại xem tên thiết bị có đúng với tên thiết bị cần thao tác không) và người thao tác, giữ liên lạc liên tục với người thao tác trong quá trình thực hiện (người giám sát đọc lệnh, người thao tác trực tiếp nhắc lại lệnh và thực hiện bước thao tác theo lệnh).",
        "b": "Không cho phép thao tác tại chỗ thiết bị trong bất cứ trường hợp nào.",
        "c": "Không cần điều kiện, nhưng sau khi thao tác xong phải báo cáo ngay cho nhân viên vận hành cấp trên biết.",
        "d": "Phải báo cáo cho nhân viên vận hành cấp trên biết và thực hiện theo mệnh lệnh.",
        "correct": "d"
    },
    {
        "q": "Trong trường hợp khẩn cấp, không thể trì hoãn được như cháy nổ hoặc có nguy cơ đe dọa đến tính mạng con người và an toàn thiết bị ở nhà máy điện, trạm điện hoặc trung tâm điều khiển. Nhân viên vận hành phải thực hiện nội dung nào sau đây ?",
        "a": "Được tiến hành thao tác cô lập phần tử sự cố theo quy trình vận hành và xử lý sự cố nhà máy điện, trạm điện hoặc trung tâm điều khiển nhưng phải xin phép Cấp điều độ có quyền điều khiển.",
        "b": "Báo cáo cho Điều độ có quyền điều khiển về tình trạng sự cố và thao tác cô lập sự cố theo lệnh của Điều độ có quyền điều khiển.",
        "c": "Báo cáo lãnh đạo đơn vị  xin ý kiến chỉ đạo.",
        "d": "Được tiến hành thao tác cô lập phần tử sự cố theo quy trình vận hành và xử lý sự cố nhà máy điện, trạm điện hoặc trung tâm điều khiển nhưng không phải xin phép Cấp điều độ có quyền điều khiển và phải chịu trách nhiệm về thao tác xử lý sự cố của mình. Sau khi xử lý xong nhân viên vận hành nhà máy điện, trạm điện, trung tâm điều khiển báo cáo ngay cho nhân viên vận hành cấp trên có quyền điều khiển các thiết bị bị sự cố.",
        "correct": "d"
    },
    {
        "q": "An toàn thao tác tại chỗ thiết bị điện được phép làm việc nào sau đây?",
        "a": "Không cho phép thao tác tại chỗ thiết bị đóng cắt ngoài trời trong điều kiện thời tiết xấu (ngoài trời có mưa tạo thành dòng chảy trên thiết bị điện, giông sét, ngập lụt, gió từ cấp 06 trở lên).",
        "b": "Thao tác tại chỗ, kéo ra/đưa vào vị trí vận hành thiết bị đóng cắt cao áp phải mang găng tay cách điện cao áp và đi ủng cách điện cao áp hoặc mang găng tay cách điện cao áp và đứng trên ghế/thảm cách điện phù hợp với cấp điện áp.",
        "c": "Chỉ được thao tác thiết bị đóng cắt trên cột với cấp điện áp đến 35 kV bằng sào cách điện khi điều kiện khoảng cách từ phần dẫn điện thấp nhất của các thiết bị điện này đến người thao tác không nhỏ hơn 3 m, trong trường hợp này người thao tác phải mang găng tay cách điện.",
        "d": "Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "d"
    },
    {
        "q": "An toàn thao tác tại chỗ thiết bị điện được phép làm việc nào sau đây?",
        "a": "Không cho phép thao tác tại chỗ thiết bị đóng cắt ngoài trời trong điều kiện thời tiết xấu (ngoài trời có mưa tạo thành dòng chảy trên thiết bị điện, giông sét, ngập lụt, gió từ cấp 08 trở lên).",
        "b": "Thao tác tại chỗ, kéo ra/đưa vào vị trí vận hành thiết bị đóng cắt cao áp phải mang găng tay cách điện cao áp và đi ủng cách điện cao áp hoặc mang găng tay cách điện cao áp và đứng trên ghế/thảm cách điện phù hợp với cấp điện áp.",
        "c": "Chỉ được thao tác thiết bị đóng cắt trên cột với cấp điện áp đến 35 kV bằng sào cách điện khi điều kiện khoảng cách từ phần dẫn điện thấp nhất của các thiết bị điện này đến người thao tác không nhỏ hơn 2 m, trong trường hợp này người thao tác phải mang găng tay cách điện.",
        "d": "Tất cả các đáp án trên (dưới) đều đúng",
        "correct": "b"
    },
    {
        "q": "Trường hợp khẩn cấp không thể trì hoãn được (cháy hoặc có nguy cơ đe dọa đến tính mạng con người hoặc an toàn thiết bị) tại nhà máy điện hoặc lưới điện, cho phép Nhân viên vận hành tiến hành thao tác 01 (một) người với quy định nào sau đây là đúng?",
        "a": "Ý 1 - Thao tác được thực hiện bằng điều khiển từ xa thông qua mạch nhị thứ hoặc màn hình điều khiển, các thao tác này không có nguy cơ gây tai nạn cho Nhân viên vận hành. Sau khi xử lý xong, Nhân viên vận hành phải báo cáo ngay cho Nhân viên vận hành cấp trên trực tiếp.",
        "b": "Ý 2 - Thao tác tại chỗ thiết bị điện, thiết bị chữa cháy hoặc thiết bị phụ trợ khác được hỗ trợ giám sát thao tác từ xa thông qua hệ thống camera giám sát vận hành. Người giám sát phải quan sát được một phần thiết bị và người thao tác, giữ liên lạc liên tục với người thao tác trong quá trình thực hiện.",
        "c": "Ý 3 - Tại vị trí giám sát từ xa, người giám sát phải kiểm tra lại xem tên thiết bị có đúng với thiết bị cần thao tác không.",
        "d": "Cả Ý 1 và Ý 3 đều đúng.",
        "correct": "d"
    },
    {
        "q": "Theo Thông tư 06/2025/TT-BCT Quy định điều độ, vận hành, thao tác, xử lý sự cố, khởi động đen và khôi phục hệ thống điện quốc gia: Những chức danh nào dưới đây được quyền ra lệnh thao tác ?",
        "a": "Điều độ viên tại các cấp điều độ; Trưởng ca nhà máy điện; Trưởng kíp trạm điện; Trưởng ca nhà máy điện hoặc Trưởng kíp trạm điện của trung tâm điều khiển.",
        "b": "Điều độ viên tại các Cấp điều độ.",
        "c": "Trưởng ca nhà máy điện, Trưởng kíp trung tâm điều khiển.",
        "d": "Trưởng kíp trạm điện.",
        "correct": "a"
    },
    {
        "q": "Theo Thông tư 06/2025/TT-BCT Quy định điều độ, vận hành, thao tác, xử lý sự cố, khởi động đen và khôi phục hệ thống điện quốc gia: Những chức danh nào dưới đây được nhận lệnh thao tác trên thiết bị điện ?",
        "a": "Nhân viên vận hành cấp dưới trực tiếp của người ra lệnh.",
        "b": "Trưởng ca các nhà máy điện.",
        "c": "Trực chính trạm 110kV.",
        "d": "Trưởng ca các nhà máy điện; Trực chính trạm 110kV; Nhân viên vận hành cấp dưới trực tiếp của người ra lệnh.",
        "correct": "a"
    },
    {
        "q": "Theo Thông tư 06/2025/TT-BCT Quy định điều độ, vận hành, thao tác, xử lý sự cố, khởi động đen và khôi phục hệ thống điện quốc gia: Chức danh nào dưới đây được đảm nhiệm vai trò Người giám sát ?",
        "a": "Điều độ viên phụ trách; Trưởng ca, Trưởng kíp, Trực chính tại nhà máy điện, trung tâm điều khiển; Trưởng kíp, Trực chính tại trạm điện; Nhân viên trực thao tác được giao nhiệm vụ tại lưới điện phân phối.",
        "b": "Điều độ viên phụ trách.",
        "c": "Trưởng ca, Trưởng kíp, Trực chính tại nhà máy điện, trung tâm điều khiển.",
        "d": "Trưởng kíp, Trực chính tại trạm điện; Nhân viên trực thao tác được giao nhiệm vụ tại lưới điện phân phối.",
        "correct": "a"
    },
    {
        "q": "Theo Thông tư 06/2025/TT-BCT Quy định điều độ, vận hành, thao tác, xử lý sự cố, khởi động đen và khôi phục hệ thống điện quốc gia: Chức danh nào dưới đây được thực hiện vai trò Người thao tác ?",
        "a": "Điều độ viên tại các Cấp điều độ; Nhân viên vận hành được giao nhiệm vụ tại nhà máy điện, trạm điện, trung tâm điều khiển; Nhân viên trực thao tác tại lưới điện phân phối.",
        "b": "Điều độ viên tại các Cấp điều độ.",
        "c": "Nhân viên vận hành được giao nhiệm vụ tại nhà máy điện, trạm điện, trung tâm điều khiển.",
        "d": "Nhân viên trực thao tác tại lưới điện phân phối.",
        "correct": "a"
    },
    {
        "q": "Theo Thông tư 06/2025/TT-BCT Quy định điều độ, vận hành, thao tác, xử lý sự cố, khởi động đen và khôi phục hệ thống điện quốc gia: Trong trường hợp mất liên lạc trực tiếp với Người nhận lệnh, cho phép truyền lệnh thao tác thông qua đơn vị nào ?",
        "a": "Nhân viên vận hành trực ban trung gian tại các đơn vị khác.",
        "b": "Trực ban Điều độ quốc gia.",
        "c": "Trực ban Công ty lưới điện cao thế.",
        "d": "Tất cả các câu trả lời đều đúng.",
        "correct": "a"
    },
    {
        "q": "Theo Thông tư 06/2025/TT-BCT Quy định điều độ, vận hành, thao tác, xử lý sự cố, khởi động đen và khôi phục hệ thống điện quốc giaa: Quy định trách nhiệm của Nhân viên vận hành trực ban trung gian khi chuyển lệnh thao tác phải làm gì ?",
        "a": "Phải ghi âm, ghi chép lệnh đầy đủ vào sổ và có trách nhiệm chuyển ngay lệnh thao tác đến đúng người nhận lệnh. Trường hợp nhân viên vận hành trực ban trung gian không liên lạc được với người nhận lệnh, phải báo lại ngay cho người ra lệnh biết.",
        "b": "Phải ghi âm, ghi chép lệnh đầy đủ vào sổ và có trách nhiệm chuyển ngay lệnh thao tác đến đúng người nhận lệnh.",
        "c": "Phải có trách nhiệm chuyển ngay lệnh thao tác đến đúng người nhận lệnh. Trường hợp nhân viên vận hành trực ban trung gian không liên lạc được với người nhận lệnh, phải báo lại ngay cho người ra lệnh biết.",
        "d": "Trường hợp nhân viên vận hành trực ban trung gian không liên lạc được với người nhận lệnh, phải báo lại ngay cho người ra lệnh biết.",
        "correct": "a"
    },
    {
        "q": "Theo Thông tư 06/2025/TT-BCT Quy định điều độ, vận hành, thao tác, xử lý sự cố, khởi động đen và khôi phục hệ thống điện quốc gia: Trường hợp dự báo có khả năng không liên lạc được với các nhân viên thao tác lưu động thì xử lý thế nào ?",
        "a": "cho phép ra lệnh thao tác đồng thời nhiều nhiệm vụ thao tác và phải thống nhất thời gian hẹn giờ thao tác với các nhân viên thao tác lưu động. Khi ra lệnh, người ra lệnh phải yêu cầu người nhận lệnh so và chỉnh lại giờ theo đồng hồ của người ra lệnh. Cấm thao tác sai giờ hẹn thao tác.",
        "b": "Không cho phép ra lệnh thao tác đồng thời nhiều nhiệm vụ thao tác.",
        "c": "Chỉ cho phép ra lệnh thao tác đồng thời nhiều nhiệm vụ thao tác trong trường hợp xử lý sự cố và phải thống nhất thời gian hẹn giờ thao tác với các nhân viên thao tác lưu động. Khi ra lệnh, người ra lệnh phải yêu cầu người nhận lệnh so và chỉnh lại giờ theo đồng hồ của người ra lệnh. Cấm thao tác sai giờ hẹn thao tác.",
        "d": "Chỉ cho phép ra lệnh thao tác đồng thời nhiều nhiệm vụ thao tác trong trường hợp không xử lý sự cố và phải thống nhất thời gian hẹn giờ thao tác với các nhân viên thao tác lưu động. Khi ra lệnh, người ra lệnh phải yêu cầu người nhận lệnh so và chỉnh lại giờ theo đồng hồ của người ra lệnh. Cấm thao tác sai giờ hẹn thao tác.",
        "correct": "a"
    },
    {
        "q": "Theo Thông tư 06/2025/TT-BCT Quy định điều độ, vận hành, thao tác, xử lý sự cố, khởi động đen và khôi phục hệ thống điện quốc gia: Lệnh thao tác được xem là thực hiện xong khi ?",
        "a": "Người nhận lệnh báo cáo cho người ra lệnh biết kết quả đã hoàn thành.",
        "b": "Người nhận lệnh đã thao tác xong theo lệnh.",
        "c": "Đã quá giờ hẹn thao tác.",
        "d": "Người ra lệnh báo cáo cho người nhận lệnh biết kết quả đã hoàn thành.",
        "correct": "a"
    },
    {
        "q": "Theo Thông tư 06/2025/TT-BCT Quy định điều độ, vận hành, thao tác, xử lý sự cố, khởi động đen và khôi phục hệ thống điện quốc gia: Các yêu cầu cơ bản về phiếu thao tác ?",
        "a": "Rõ ràng, không được sửa chữa tẩy xóa và thể hiện rõ phiếu được viết cho sơ đồ kết dây cụ thể.",
        "b": "Rõ ràng và thể hiện rõ phiếu được viết cho sơ đồ kết dây nào.",
        "c": "Rõ ràng, thể hiện rõ phiếu được viết cho sơ đồ kết dây nào và phải được ký tên, đóng dấu.",
        "d": "Rõ ràng và phải được ký tên, đóng dấu.",
        "correct": "a"
    },
    {
        "q": "Theo Thông tư 06/2025/TT-BCT Quy định điều độ, vận hành, thao tác, xử lý sự cố, khởi động đen và khôi phục hệ thống điện quốc gia: Chức danh nào có quyền thay đổi nội dung thao tác trong phiếu thao tác để phù hợp với sơ đồ kết dây thực tế, sau khi đồng ý phải làm gì ?",
        "a": "Phải được sự đồng ý của người duyệt phiếu và phải ghi vào mục “Các sự kiện bất thường trong thao tác” của phiếu thao tác và sổ nhật ký vận hành.",
        "b": "Phải được sự đồng ý của người viết phiếu.",
        "c": "Phải được sự đồng ý của người ra lệnh.",
        "d": "Phải được sự đồng ý của Điều độ cấp trên và phải ghi vào mục “Các sự kiện bất thường trong thao tác” của phiếu thao tác và sổ nhật ký vận hành.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, quy định về thời tiết khi làm việc với ĐDK cao áp đang có điện (sửa chữa nóng) trên ĐDK điện áp đến 35kV như thế nào?",
        "a": "Cấm thực hiện công tác khi trời mưa hoặc khi thời tiết ẩm ướt hoặc có sương mù hoặc có giông sét hoặc có gió từ cấp 5 trở lên; khi trời tối, nơi làm việc không đủ ánh sáng.",
        "b": "Cấm thực hiện công việc khi có gió cấp 4 trở lên, khi có mưa phùn, mưa giông, sấm sét, sương mù hoặc độ ẩm không khí không đảm bảo an toàn theo quy trình.",
        "c": "Khi đang công tác mà nhận thấy có khả năng mưa giông, sấm sét thì phải dừng ngay công việc và rút khỏi hiện trường.",
        "d": "Cấm thực hiện công việc khi có gió cấp 6 trở lên, khi có mưa phùn, mưa giông, sấm sét, sương mù tùy theo điều kiện thực tế, Người CHTT quyết định dừng công việc.",
        "correct": "a"
    },
    {
        "q": "Điều kiện thời tiết nào không được phép thi công hotline?",
        "a": "Khi trời u ám, thời tiết khô hanh hoặc có sương mù hoặc có dông hoặc có gió từ cấp 4 trở lên.",
        "b": "Khi trời mưa hoặc khi thời tiết ẩm ướt hoặc có sương mù hoặc có giông sét hoặc có gió từ cấp 5 trở lên.",
        "c": "Khi trời u ám.",
        "d": "Khi có sương mù hoặc có dông hoặc có gió từ cấp 6 trở lên.",
        "correct": "d"
    },
    {
        "q": "Công nhân hotline được phép dùng tay chạm trực tiếp vào phần mang điện khi nào?",
        "a": "Khi đang đứng trên xe gàu cách điện hoặc bệ đỡ cách điện.",
        "b": "Khi mang găng cao su cách điện.",
        "c": "Chỉ được phép chạm vào một pha.",
        "d": "Nghiêm cấm công nhân dùng tay chạm trực tiếp vào phần mang điện mặc dù đang đứng trên xe gàu cách điện hoặc bệ đỡ cách điện.",
        "correct": "d"
    },
    {
        "q": "Các lưu ý khi đang thi công hotline bằng xe gàu cách điện?",
        "a": "Cấm người đứng dưới phạm vi di chuyển của cần cẩu xe gàu khi cần cẩu, xe gàu đang hoạt động.",
        "b": "Khi làm việc, công nhân hotline phải tập trung tư tưởng, không đùa nghịch, làm cẩn thận, chính xác đúng quy trình, đúng kỹ thuật",
        "c": "Nghiêm cấm công nhân hotline làm bừa làm ẩu, làm không đúng quy trình, làm không đúng kỹ thuật.",
        "d": "Cả 3 đáp án trên (dưới) đều đúng",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn điện, quy định về thời tiết khi làm việc với ĐDK cao áp đang có điện (sửa chữa nóng) trên ĐDK điện áp đến 35kV như thế nào?",
        "a": "Cấm thực hiện công tác khi trời mưa hoặc khi thời tiết ẩm ướt hoặc có sương mù hoặc có giông sét hoặc có gió từ cấp 5 trở lên; khi trời tối, nơi làm việc không đủ ánh sáng.",
        "b": "Cấm thực hiện công việc khi có gió cấp 4 trở lên, khi có mưa phùn, mưa giông, sấm sét, sương mù hoặc độ ẩm không khí không đảm bảo an toàn theo quy trình.",
        "c": "Khi đang công tác mà nhận thấy có khả năng mưa giông, sấm sét thì phải dừng ngay công việc và rút khỏi hiện trường.",
        "d": "Cấm thực hiện công việc khi có gió cấp 5 trở lên, khi có mưa phùn, mưa giông, sấm sét, sương mù tùy theo điều kiện thực tế, Người CHTT quyết định dừng công việc.",
        "correct": "d"
    },
    {
        "q": "Thi công hotline thực hiện theo các phương pháp nào?",
        "a": "Phương pháp trực tiếp (tiếp xúc).",
        "b": "Phương pháp gián tiếp (khoảng cách).",
        "c": "Phương pháp kết hợp trực tiếp và gián tiếp.",
        "d": "Cả 3 phương pháp trên (dưới).",
        "correct": "d"
    },
    {
        "q": "Trong mẫu PCT của quy trình an toàn tại mục ghi “Cảnh báo, chỉ dẫn cần thiết:” ghi những nội dung gì?",
        "a": "Ghi tất cả những BPAT về điện và cơ học do ĐVQLVH đã thực hiện có liên quan đến khu vực làm việc của ĐVCT;",
        "b": "Ghi những cảnh báo cho ĐVCT biết tại vị trí làm việc còn có những nguy cơ mất an toàn khác (như các ngăn lộ, má CD, MC…đường dây khác đang mang điện; các cảnh báo giao thông, khu đông người, các vị trí nguy hiểm cơ học khác…)",
        "c": "Ghi những yêu cầu về trang thiết bị, dụng cụ an toàn, BHLĐ cần thiết mà ĐVCT phải có để thực hiện công việc",
        "d": "Không ghi gì.",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn, khi nhận những mệnh lệnh không đúng Quy trình này, có nguy cơ mất an toàn cho người hoặc thiết bị thì người nhận lệnh xử lý như thế nào?",
        "a": "Có quyền không chấp hành, nếu người ra lệnh không chấp thuận thì người nhận lệnh được quyền báo cáo với các cấp cán bộ an toàn.",
        "b": "Có quyền không chấp hành, nếu người ra lệnh không chấp thuận thì người nhận lệnh được quyền báo cáo với cấp trên trực tiếp của người ra lệnh và/hoặc Cấp có thẩm quyền.",
        "c": "Phải chấp hành, nhưng sau khi thực hiện xong phải báo cáo với cấp trên trực tiếp của người ra lệnh và/hoặc cấp có thẩm quyền.",
        "d": "Tuyệt đối không chấp hành, báo cáo ngay với Giám đốc Công ty hoặc Trường phòng an toàn Công ty.",
        "correct": "a"
    },
    {
        "q": "Theo Quy định công tác an toàn của EVNNPC, trách nhiệm của đơn vị sử dụng TBYCNN nào sau đây là đúng ?",
        "a": "Lưu giữ lý lịch và các biên bản, giấy chứng nhận kết quả kiểm định, phiếu khai báo sử dụng TBYCNN trong vòng 12 tháng.",
        "b": "Thực hiện nghiêm túc, đầy đủ các kiến nghị của tổ chức kiểm định trong việc đảm bảo an toàn trong quá trình sử dụng TBYCNN nếu kinh phí tại đơn vị cho phép.",
        "c": "Nghiêm cấm sử dụng TBYCNN chưa được kiểm định đạt yêu cầu, kết quả kiểm định không đạt, quá hạn sử dụng hoặc có dấu hiệu mất an toàn trong quá trình sử dụng, trừ trường hợp cấp bách phải sử dụng để khắc phục sự cố, thiên tai…",
        "d": "Phải có quy trình vận hành (sử dụng) cho từng loại TBYCNN. Những người quản lý trực tiếp có liên quan đến việc quản lý, sử dụng phải nắm vững quy trình này và phải được giao nhiệm vụ theo yêu cầu của pháp luật.",
        "correct": "a"
    },
    {
        "q": "Công nhân thi công trên lưới điện đang mang điện được phép dùng tay chạm trực tiếp vào phần mang điện khi nào?",
        "a": "Khi đang đứng trên xe gàu cách điện hoặc bệ đỡ cách điện.",
        "b": "Khi mang găng cao su cách điện.",
        "c": "Chỉ được phép chạm vào một pha.",
        "d": "Nghiêm cấm công nhân thi công trên lưới điện đang mang điện dùng tay chạm trực tiếp vào phần mang điện mặc dù đang đứng trên xe gàu cách điện hoặc bệ đỡ cách điện.",
        "correct": "a"
    },
    {
        "q": "Các lưu ý khi đứng trong thùng gàu cách điện ?",
        "a": "Công nhân thi công trên lưới điện đang mang điện khi đứng trong thùng cách điện của xe gàu cách điện phải có tư thế chắc chắn, khi đứng trên bệ đỡ cách điện phải lưu ý sự di chuyển của bệ đỡ.",
        "b": "Công nhân thi công trên lưới điện đang mang điện khi đứng trong thùng cách điện của xe gàu cách điện phải quàng dây an toàn vào đầu cần cách điện của xe gàu, khi đứng trên bệ đỡ cách điện phải quàng dây an toàn vào tay vịn của bệ đỡ cách điện. Nghiêm cấm công nhân thi công trên lưới điện đang mang điện sử dụng xe gàu cách điện cho công tác thi công trên lưới điện đang mang điện khi không có thùng cách điện đặt bên trong gàu.",
        "c": "Công nhân thi công trên lưới điện đang mang điện khi đứng trong thùng cách điện của xe gàu cách điện phải quàng dây an toàn vào cần cách điện của xe gàu, khi đứng trên bệ đỡ cách điện phải quàng dây an toàn vào tay vịn của bệ đỡ cách điện.",
        "d": "Công nhân thi công trên lưới điện đang mang điện khi đứng trong thùng cách điện của xe gàu cách điện phải quàng dây an toàn vào cần cách điện của xe gàu, khi đứng trên bệ đỡ cách điện phải quàng dây an toàn vào thân trụ. Nghiêm cấm công nhân Thi công trên lưới điện đang mang điện sử dụng xe gàu cách điện cho công tác Thi công trên lưới điện đang mang điện khi không có thùng cách điện đặt bên trong gàu.",
        "correct": "d"
    },
    {
        "q": "Các lưu ý khi đang thi công trên lưới điện đang mang điện bằng xe gàu cách điện ?",
        "a": "Cấm người đứng dưới phạm vi di chuyển của cần cẩu xe gàu khi cần cẩu, xe gàu đang hoạt động.",
        "b": "Khi làm việc, công nhân thi công trên lưới điện đang mang điện phải tập trung tư tưởng, không đùa nghịch, làm cẩn thận, chính xác đúng quy trình, đúng kỹ thuật",
        "c": "Nghiêm cấm công nhân thi công trên lưới điện đang mang điện làm bừa làm ẩu, làm không đúng quy trình, làm không đúng kỹ thuật.",
        "d": "Cả 3 câu trên (dưới) đều đúng",
        "correct": "d"
    },
    {
        "q": "Khi làm công tác thi công trên lưới điện đang mang điện bằng phương pháp trực tiếp (tiếp xúc), phải luôn duy trì ít nhất mấy lần cách điện ?",
        "a": "Khi làm công tác thi công trên lưới điện đang mang điện, phải luôn duy trì ít nhất 2 lần cách điện (1 lần cách điện khi đường dây đi vào người công nhân thi công trên lưới điện đang mang điện và 1 lần cách điện khi đường dây đi ra khỏi người công nhân thi công trên lưới điện đang mang điện) để đảm bảo an toàn tuyệt đối cho con người.",
        "b": "Khi làm công tác thi công trên lưới điện đang mang điện, phải luôn duy trì ít nhất 1 lần cách điện để đảm bảo an toàn tuyệt đối cho con người.",
        "c": "Khi làm công tác thi công trên lưới điện đang mang điện, phải luôn duy trì ít nhất 3 lần cách điện  để đảm bảo an toàn tuyệt đối cho con người.",
        "d": "Khi làm công tác thi công trên lưới điện đang mang điện, phải luôn duy trì ít nhất 4 lần cách điện để đảm bảo an toàn tuyệt đối cho con người.",
        "correct": "d"
    },
    {
        "q": "Cách mắc kích căng hoặc xả dây đang có điện ?",
        "a": "Ý 1 - Công nhân thi công trên lưới điện đang mang điện phải mắc kích cách điện trực tiếp vào cấu trúc (như đà, trụ) khi căng hoặc xả dây đang có điện.",
        "b": "Ý 2 - Nghiêm cấm công nhân thi công trên lưới điện đang mang điện mắc kích cách điện trực tiếp vào cấu trúc (như đà, trụ) khi căng hoặc xả dây đang có điện, phải luôn luôn lắp thêm 1 cây sào nối cách điện giữa cấu trúc và kích cách điện.",
        "c": "Ý 3 - Có thể sử dụng kích bình thường để mắc trực tiếp vào cấu trúc (như đà, trụ) khi căng hoặc xả dây đang có điện, phải luôn luôn lắp thêm 1 cây sào nối cách điện giữa cấu trúc và kích cách điện.",
        "d": "Ý 2 và Ý 3 đúng",
        "correct": "d"
    },
    {
        "q": "Trước khi tiến hành bất cứ công tác gì, đơn vị công tác sửa chữa đường dây đang có điện cần thực hiện ?",
        "a": "Ý 1 - Phải phân tích các khả năng có thể xuất hiện các nguy cơ mất an toàn, gây nguy hiểm cho người và thiết bị, tình hình giao thông, mặt bằng công tác, các vấn đề cần lưu ý khác, để đảm bảo tình trạng làm việc an toàn tuyệt đối trên lưới điện.",
        "b": "Ý 2 - Trên cơ sở những nội dung đã khảo sát, người trưởng nhóm sẽ lập kế hoạch tiến hành các thao tác cụ thể.",
        "c": "Thực hiện cả nội dung Ý 1 và Ý 2.",
        "d": "Chỉ thực hiện Ý 1.",
        "correct": "d"
    },
    {
        "q": "Trong quá trình thực hiện công tác sửa chữa đường dây đang có điện, để đảm bảo an toàn cho nhóm công tác, khoá các mạch điện tự đóng lại của các thiết bị trên lưới ?",
        "a": "Khóa hết.",
        "b": "Không khoá.",
        "c": "Khóa gần nhất.",
        "d": "Nơi gần nhất, tuy nhiên nếu thiết bị gần nhất không thể khóa được thì thiết bị đó sẽ được nối tắt, đồng thời thiết bị có mạch tự đóng lại kế tiếp trước nó phải được khóa lại.",
        "correct": "d"
    },
    {
        "q": "Các điều nghiêm cấm khi thực hiện công tác sửa chữa đường dây đang có điện ?",
        "a": "Uống rượu, bia trước và trong giờ làm việc.",
        "b": "Thực hiện công tác sửa chữa đường dây đang có điện khi trời mưa hoặc khi thời tiết ẩm ướt hoặc có sương mù hoặc có giông hoặc có gió từ cấp 6 (60-70km/giờ) trở lên . Khi thấy thời tiết thay đổi như trên thì phải ngưng ngay công tác sửa chữa đường dây đang có điện.",
        "c": "Thực hiện công tác sửa chữa đường dây đang có điện khi trời tối hoặc ban đêm.",
        "d": "Tất cả các đáp án trên (dưới) đều đúng.",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn khi vận hành xe nâng người, điều cấm nào đúng?",
        "a": "Cấm vận hành nơi có các phương tiện di động khác đang làm việc; Cấm rời khỏi sàn thao tác; Cấm sử dụng xe nâng người sai mục đích và chở người khi tiến hành di chuyển/tham gia giao thông.",
        "b": "Cấm vận hành nơi có các phương tiện di động khác đang làm việc; Cấm đứng trên sàn thao tác khi xe đang nâng; Cấm sử dụng xe nâng người sai mục đích.",
        "c": "Cấm rời khỏi sàn thao tác; Cấm sử dụng xe nâng người sai mục đích và chở người khi tiến hành di chuyển/tham gia giao thông.",
        "d": "Cấm vận hành nơi có các phương tiện di động khác đang làm việc; Cấm rời khỏi sàn thao tác; Cấm chở người khi tiến hành di chuyển/tham gia giao thông.",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn quy định về quản lý xe nâng người như thế nào?",
        "a": "Đơn vị sử dụng phải lập sổ theo dõi tình trạng của xe, nhật trình sử dụng.",
        "b": "Đơn vị sử dụng phải lập nhật ký theo dõi tình trạng của xe, nhật trình sử dụng.",
        "c": "Đơn vị sử dụng phải cử người theo dõi tình trạng của xe, nhật trình sử dụng.",
        "d": "Đơn vị sử dụng phải lập nhật ký theo dõi tình trạng sự cố của xe.",
        "correct": "d"
    },
    {
        "q": "Đối với cấp điện áp 22 kV, cách nhận biết cấp điện áp theo đánh số thiết bị trong sơ đồ (Chữ số đầu tiên trong đánh số thiết bị trừ máy biến áp, máy phát, máy bù đồng bộ)?",
        "a": "2",
        "b": "3",
        "c": "4",
        "d": "1",
        "correct": "d"
    },
    {
        "q": "Các lưu ý khi đang thi công hotline bằng xe gàu cách điện?",
        "a": "Cấm người đứng dưới phạm vi di chuyển của cần cẩu xe gàu khi cần cẩu, xe gàu đang hoạt động",
        "b": "Khi làm việc, công nhân hotline phải tập trung tư tưởng, không đùa nghịch, làm cẩn thận, chính xác đúng quy trình, đúng kỹ thuật. C.",
        "c": "Nghiêm cấm công nhân hotline làm bừa làm ẩu, làm không đúng quy trình, làm không đúng kỹ thuật",
        "d": "Cả 3 đáp án trên đều đúng",
        "correct": "d"
    },
    {
        "q": "Khi tiến hành công tác hotline, công cụ dụng cụ hotline không được phép đặt trực tiếp ở đâu?",
        "a": "Trên xe gàu cách điện",
        "b": "Trong thùng cách điện",
        "c": "Trên giá đỡ",
        "d": "Trực tiếp trên mặt đất",
        "correct": "d"
    },
    {
        "q": "Trước khi sử dụng xe gàu cách điện để thực hiện công tác hotline, công nhân phải kiểm tra bộ phận nào trên cần nâng?",
        "a": "Hệ thống phanh",
        "b": "Phần cách điện của cần nâng và phải được kiểm tra sạch sẽ bằng dẻ lau chuyên dụng",
        "c": "Hệ thống chân chống",
        "d": "Ý 2 và 3",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn, khi nhận được mệnh lệnh không đúng Quy trình này và có nguy cơ mất an toàn cho người hoặc thiết bị điện, người nhận lệnh có quyền không chấp hành. Nếu người ra lệnh không chấp thuận, người nhận lệnh phải thực hiện hành động tiếp theo nào?",
        "a": "Vẫn phải chấp hành mệnh lệnh để tránh bị kỷ luật",
        "b": "Tự mình tìm cách khắc phục rủi ro và thực hiện công việc",
        "c": "Được quyền báo cáo với cấp trên trực tiếp của người ra lệnh và/hoặc Cấp có thẩm quyền",
        "d": "Dừng công việc và rời khỏi hiện trường ngay lập tức mà không báo cáo.",
        "correct": "d"
    },
    {
        "q": "Điều kiện nhiệt độ, độ ẩm trong phòng bảo quản CCDC hotline?",
        "a": "Được duy trì nhiệt độ từ 20-25 độ C, độ ẩm không khí duy trì không quá 80%, không bị ánh nắng mặt trời chiếu trực tiếp",
        "b": "Được duy trì nhiệt độ từ 20-25 độ C, độ ẩm không khí duy trì không quá 90%, không bị ánh nắng mặt trời chiếu trực tiếp",
        "c": "Được duy trì nhiệt độ dưới 25 độ C, độ ẩm không khí duy trì không quá 80%, không bị ánh nắng mặt trời chiếu trực tiếp",
        "d": "Được duy trì nhiệt độ từ trên 25 độ C, độ ẩm không khí duy trì không quá 80%, không bị ánh nắng mặt trời chiếu trực tiếp",
        "correct": "d"
    },
    {
        "q": "Nghiêm cấm sử dụng các loại dụng cụ thi công Hotline trong điều kiện thời tiết nào?",
        "a": "Trời khô ráo",
        "b": "Khi trời mưa hoặc sương mù",
        "c": "Ẩm ướt",
        "d": "Ý 2 và 3",
        "correct": "d"
    },
    {
        "q": "Khi vệ sinh dụng cụ thi công Hotline, loại chất tẩy rửa nào bị nghiêm cấm sử dụng do có thể gây hư hại?",
        "a": "Nước sạch và xà phòng nhẹ",
        "b": "Dung môi làm sạch Moiture Eater II (chỉ dùng cho sào cách điện không sử dụng cho các thiết bị khác)",
        "c": "Chất tẩy rửa công nghiệp",
        "d": "Cồn y tế",
        "correct": "d"
    },
    {
        "q": "Khi găng tay và vai áo bị hư hỏng, đơn vị cần xử lý như thế nào?",
        "a": "Vẫn có thể sử dụng tạm thời cho các công việc ít nguy hiểm hơn",
        "b": "Tiến hành sửa chữa để sử dụng lại",
        "c": "Cất lại vào trong kho và chờ sử lý sau",
        "d": "Cất vào một khu vực riêng, với găng tay, vai áo phải lập tức cắt bỏ và báo cáo lãnh đạo để lập biên bản",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn, quy định điều kiện về nước khi vệ sinh cách điện ĐDK cao áp khi đang vận hành như thế nào?",
        "a": "Nghiêm cấm sử dụng nước chưa đạt tiêu chuẩn về cách điện để vệ sinh cách điện hotline.",
        "b": "Chất lượng nước, áp lực nước phải đảm bảo theo quy trình. Nghiêm cấm sử dụng nước thường lấy từ các vòi nước công cộng để sử dụng.",
        "c": "Chất lượng nước, áp lực nước phải đảm bảo theo quy trình. Nghiêm cấm sử dụng nước chưa đạt tiêu chuẩn về cách điện để vệ sinh cách điện hotline.",
        "d": "Chất lượng nước, áp lực nước phải đảm bảo theo quy trình và phải đo kiểm tra ngay sau khi thi công.",
        "correct": "c"
    },
    {
        "q": "Theo Quy trình An toàn, quy định về thời tiết khi vệ sinh cách điện ĐDK cao áp khi đang vận hành, nội dung nào không đúng (không phù hợp)?",
        "a": "Chỉ được phép thực hiện công việc trong điều kiện thời tiết bình thường;",
        "b": "Chỉ được phép thực hiện công việc trong điều kiện thời tiết bình thường; cấm thực hiện công việc khi có gió cấp 4 trở lên, khi có mưa phùn, mưa giông, sấm sét, sương mù hoặc độ ẩm không khí không đảm bảo an toàn theo quy trình",
        "c": "Khi đang công tác mà nhận thấy có khả năng mưa giông, sấm sét thì phải dừng ngay công việc và rút khỏi hiện trường.",
        "d": "Cấm thực hiện công việc khi có gió cấp 6 trở lên, khi có mưa phùn, mưa giông, sấm sét, sương mù tùy theo điều kiện thực tế, người CHTT quyết định dừng công việc.",
        "correct": "d"
    },
    {
        "q": "Theo Quy trình An toàn, quy định khoảng cách an toàn điện khi không có rào chắn đối với điện áp từ trên 35  đến 110kV như thế nào?",
        "a": "Không nhỏ hơn 2,0 mét.",
        "b": "Không nhỏ hơn 0,7 mét.",
        "c": "Không nhỏ hơn 1,5 mét.",
        "d": "Không nhỏ hơn 1,0 mét.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn quy định khoảng cách an toàn điện khi có rào chắn (tức là khỏng cách từ rào chắn đến đến phần có điện) đối với điện áp từ trên 35 đến 110kV như thế nào?",
        "a": "Không nhỏ hơn 2,0 mét.",
        "b": "Không nhỏ hơn 0,7 mét.",
        "c": "Không nhỏ hơn 1,5 mét.",
        "d": "Không nhỏ hơn 1,0 mét.",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn thì khoảng cách cho phép nhỏ nhất đến phần có điện cao áp xoay chiều được quy định như thế nào?",
        "a": "Từ 1-35kV là 0,5 mét; Từ trên 35kV-110kV là 1,5 mét.",
        "b": "Từ 1-35kV là 0,7 mét; Từ trên 35kV-110kV là 2,0 mét",
        "c": "Từ trên 1-35kV là 0,6 mét; Từ trên 35kV-110kV là 1,0 mét",
        "d": "Từ 1-35kV là 0,8 mét; Từ trên 35kV-110kV là 2,5 mét",
        "correct": "c"
    },
    {
        "q": "Quy định về điều kiện thời tiết, ánh sáng khi tiến hành vệ sinh cách điện hotline ?",
        "a": "Ý 1 - Nếu có khả năng mưa giông sấm sét thì vẫn tiến hành công việc vệ sinh cách điện.",
        "b": "Ý 2 - Thời tiết bình thường, gió nhẹ dưới cấp 4, không có: mưa phùn, mưa giông, sấm sét, sương mù.",
        "c": "Ý 3 - Có ánh sáng để nhìn thấy phần cách điện và phần mang điện.",
        "d": "Đáp án Ý 2 và Ý 3 đúng",
        "correct": "d"
    },
    {
        "q": "Quy định về nối đất khi thực hiện vệ sinh cách điện hotline ?",
        "a": "Ý 1 - Tất cả thiết bị, phụ kiện, vật dụng bằng kim loại tham gia vào quá trình vệ sinh cách điện trạm biến áp 110 kV, đường dây 110 kV và đường dây 35 kV đều phải nối đất.",
        "b": "Ý 2 - Tất cả thiết bị, phụ kiện, vật dụng bằng kim loại tham gia vào quá trình vệ sinh cách điện đường dây 110 kV và trạm biến áp 22, 35, 110kV phải nối đất.",
        "c": "Ý 3 - Đối với lưới điện có trung tính trực tiếp nối đất thì tất cả thiết bị, phụ kiện, vật dụng bằng kim loại tham gia vào quá trình vệ sinh cách điện phải nối đất.",
        "d": "Đáp án Ý 2 và Ý 3 đúng.",
        "correct": "d"
    },
    {
        "q": "Theo quy trình vệ sinh hotline được các loại công việc sau ?",
        "a": "Vệ sinh cách điện đứng, vệ sinh chuỗi cách điện đỡ (chuỗi cách điện treo), vệ sinh chuỗi cách điện néo.",
        "b": "Vệ sinh cách điện thiết bị trong trạm biến áp (trừ tủ hợp bộ, các loại tủ bảng khác).",
        "c": "Vệ sinh cách điện thiết bị treo trên cột điện.",
        "d": "Cả 3 đáp án trên (dưới) đều đúng.",
        "correct": "d"
    },
    {
        "q": "Người thực hiện vệ sinh hotline cần phải ?",
        "a": "Ý 1 - Bảo đảm sức khỏe theo quy định.",
        "b": "Ý 2 - Huấn luyện chuyên môn và cấp giấy chứng nhận cho người thực hiện công việc vệ sinh hotline",
        "c": "Cả 2 ý trên (dưới) đều đúng.",
        "d": "Cả 2 ý trên (dưới) đều sai.",
        "correct": "c"
    },
    {
        "q": "Người thực hiện vệ sinh hotline phải đi ủng cách điện tối thiểu là ?",
        "a": "10kV.",
        "b": "22kV.",
        "c": "35kV.",
        "d": "110kV.",
        "correct": "b"
    },
    {
        "q": "Khi vệ sinh hotline với cấp điện áp 110kV các phần thiết bị kim loại (như xe ôtô, máy bơm, động cơ ...) phải được ?",
        "a": "Nối đất.",
        "b": "Không cần nối đất.",
        "c": "Đặt cách xa các thiết bị mang điện.",
        "d": "Đặt cách 3,0m với các thiết bị mang điện.",
        "correct": "a"
    },
    {
        "q": "Giá trị dòng điện rò phụ thuộc váo yếu tố nào sau đây ?",
        "a": "Cấp điện áp vận hành.",
        "b": "Khoảng cách từ phần tử mang điện đến đầu vòi phun.",
        "c": "Chất lượng cách điện của nước vệ sinh hotline.",
        "d": "Cả 3 đáp án trên (dưới) đều đúng.",
        "correct": "d"
    },
    {
        "q": "Không được thực hiện vệ sinh cách điện hotline khi gặp trường hợp nào sau đây ?",
        "a": "Khi có gió cấp 4 trở lên.",
        "b": "Khi có mưa phùn, mưa giông, sấm sét, sương mù.",
        "c": "Khi môi trường có độ ẩm không khí lớn hơn 90%.",
        "d": "Cả ba đáp án trên (dưới) đều đúng.",
        "correct": "d"
    },
    {
        "q": "Nguyên tắc thu dọn hiện trường sau khi hoàn thành công việc là gì?",
        "a": "Cho phép ném, thả tự do các vật dụng nhỏ.",
        "b": "Chỉ cần thu dọn các vật dụng lớn",
        "c": "Chỉ cần NV1 thu dọn vật dụng.",
        "d": "Tất cả vật dụng mang lên cột đều phải được thu dọn và mang xuống đất theo cách thức đã kéo lên (nghiêm cấm ném, thả tự do).",
        "correct": "b"
    },
    {
        "q": "Khi đang công tác mà nhận thấy có khả năng mưa giông, sấm sét thì phải làm gì?",
        "a": "Vẫn tiếp tục công việc nhưng giảm áp lực nước",
        "b": "Chuyển sang vệ sinh các pha đã hoàn thành",
        "c": "Dừng ngay công việc, rút khỏi hiện trường.",
        "d": "Báo cáo lãnh đạo đơn vị để xin chỉ đạo",
        "correct": "b"
    },
    {
        "q": "Khi vệ sinh thiết bị trong trạm biến áp, điều gì nghiêm cấm thực hiện?",
        "a": "Không được bắn nước trực tiếp vào các hộp đấu dây nhị thứ.",
        "b": "Bắn nước từ phía dưới lên trên.",
        "c": "Sử dụng hai vòi phun đồng thời.",
        "d": "Bắn nước xuôi theo chiều gió.",
        "correct": "b"
    },
    {
        "q": "Khi cách điện bị nhiễm bẩn nặng (đóng rêu, bám bụi xi măng, bụi than,...) cần bắn nước ít nhất hai lần, mỗi lần cách nhau khoảng bao nhiêu?",
        "a": "01 đến 02 phút.",
        "b": "02 đến 05 phút.",
        "c": "05 đến 10 phút.",
        "d": "10 đến 15 phút.",
        "correct": "b"
    },
    {
        "q": "Khi chuẩn bị bắn nước vệ sinh, người dưới đất phải đứng cách xa phần kim loại được nối đất hoặc đứng ở đâu?",
        "a": "Chỉ cần đứng xa phần kim loại.",
        "b": "Đứng trên tấm thảm cách điện",
        "c": "Đứng cách xa cột điện 5,0 m",
        "d": "Đứng ở vị trí tập kết thiết bị.",
        "correct": "b"
    },
    {
        "q": "Với thiết bị trong trạm biến áp có đường kính cách điện lớn hơn 20cm và nhiễm bẩn nặng, cần sử dụng bao nhiêu vòi phun đồng thời và bố trí lệch nhau một góc khoảng bao nhiêu?",
        "a": "Một vòi phun, góc 45 độ",
        "b": "Hai vòi phun đồng thời, góc 90 độ",
        "c": "Ba vòi phun, góc 120 độ",
        "d": "Bốn vòi phun, góc 90 độ",
        "correct": "b"
    },
    {
        "q": "Khi vệ sinh cách điện 110kV, các phần thiết bị kim loại dưới đất (như xe ôtô, máy bơm, động cơ...) phải được thực hiện công tác gì?",
        "a": "Phải được cách ly",
        "b": "Phải được sơn cách điện.",
        "c": "Phải được nối đất.",
        "d": "Phải được đặt trên thảm cách điện.",
        "correct": "b"
    },
    {
        "q": "Khi vệ sinh hot-line cột đỡ đơn 110kVbê tông ly tâm, NV1 tiến hành vệ sinh 2 chuỗi sứ xà dưới rồi chuyển lên chuỗi sứ xà trên khi nào?",
        "a": "Khi áp lực nước ổn định.",
        "b": "Khi NV4 ra lệnh.",
        "c": "Khi thấy áp lực nước đủ mạnh.",
        "d": "Khi đã ổn định vị trí đứng",
        "correct": "b"
    },
    {
        "q": "Khi vệ sinh hot-line cột đỡ 110kV, cột thép 1 mạch, NV1 trèo lên cột đến vùng số 1, sau đó di chuyển vào đâu?",
        "a": "Bên trong thân cột.",
        "b": "Vùng số 2",
        "c": "Bên ngoài thân cột",
        "d": "Thanh giằng chéo",
        "correct": "b"
    },
    {
        "q": "Khi vệ sinh cột đỡ 110kV, cột thép 1 mạch, súng bắn nước, ống dẫn nước và dây tiếp đất đầu vòi được kéo lên vị trí vùng số mấy?",
        "a": "Vùng 1",
        "b": "Vùng 2",
        "c": "Vùng 3",
        "d": "Vùng 4",
        "correct": "b"
    },
    {
        "q": "Cách cứu nạn nhân bị điện giật ở trạng thái tắt thở?",
        "a": "Để nạn nhân ra chỗ thoáng khí yên tĩnh chăm sóc cho hồi tỉnh. Sau đó mời y, bác sỹ hoặc nhẹ nhàng đưa đến cơ quan y tế gần nhất để theo dõi chăm sóc",
        "b": "Đặt nạn nhân nơi thoáng khí, yên tĩnh, nới rộng quần, áo, thắt lưng, moi rớt rãi trong mồm nạn nhân ra, cho nạn nhân ngửi amôniắc, nước tiểu, ma sát toàn thân cho nóng lên và cho người đi mời y, bác sỹ đến để chăm sóc.",
        "c": "Nếu tim nạn nhân ngừng đập, toàn thân co giật giống như chết thì phải đưa nạn nhân ra chỗ thoáng khí, nới rộng quần, áo, thắt lưng, moi rớt rãi trong mồm và kéo lưỡi (nếu lưỡi thụt vào). Tiến hành làm hô hấp nhân tạo, hà hơi thổi ngạt ngay, phải làm liên tục, kiên trì cho đến khi có ý kiến của y, bác sỹ quyết định mới thôi.",
        "d": "Cả 03 đáp án trên (dưới) đúng",
        "correct": "a"
    },
    {
        "q": "Nạn nhân bị điện giật được chia ra các trạng thái mức độ nào?",
        "a": "Nạn nhân chưa mất tri giác, nạn nhân mất tri giác, nạn nhân đã tắt thở",
        "b": "Nạn nhân chưa mất tri giác, nạn nhân đã tắt thở, nạn nhân tim ngừng đập",
        "c": "Nạn nhân bị vỡ sọ, nạn nhân bị cháy toàn thân, Nạn nhân tim ngừng đập",
        "d": "Nạn nhân mất tri giác, nạn nhân đã tắt thở, nạn nhân bị cháy toàn thân",
        "correct": "c"
    },
    {
        "q": "Các lưu ý khi sử dụng bình chữa cháy CO2?",
        "a": "Tuyệt đối không sử dụng bình CO2 để chữa các đám cháy có than cốc, kim loại nóng chảy. Vì khi ta phun vào sẽ có phản ứng hoá học tạo ra khí CO rất độc",
        "b": "Không được phun vào người vì khí CO2 hóa lỏng khi được giải phóng ra môi trường bên ngoài sẽ có nhiệt độ ở -79 độ C sẽ gây bỏng lạnh.",
        "c": "Không chữa các đám cháy ở nơi có gió mạnh.",
        "d": "Tất cả các đáp án trên (dưới)",
        "correct": "d"
    },
    {
        "q": "Khi phát hiện có đám cháy việc đầu tiên cần phải làm gì?",
        "a": "Báo cáo lãnh đạo trực tiếp",
        "b": "Lập tức hô hoán báo động cho mọi người biết nơi đám cháy xuất hiện",
        "c": "Tất cả các đáp án trên (dưới)",
        "d": "Gọi điện thoại cho đội PCCC của trạm và gọi số 114 nếu cháy lớn ngoài khả năng tự chữa cháy tại chỗ",
        "correct": "b"
    },
    {
        "q": "Theo Quy trình An toàn biển báo \"CÁP ĐIỆN LỰC\" đặt như thế nào?",
        "a": "Trên mặt đất hoặc trên cột mốc, ở vị trí tim rãnh cáp, dễ nhìn thấy và xác định được đường cáp ở mọi vị trí; tại các vị trí chuyển hướng, khoảng cách giữa 2 biển báo liền kề không quá 30 mét.",
        "b": "Trong lòng đất hoặc trên cột mốc, ở vị trí tim rãnh cáp, dễ nhìn thấy và xác định được đường cáp ở mọi vị trí; tại các vị trí chuyển hướng.",
        "c": "Trên mặt đất ở vị trí tim rãnh cáp, dễ nhìn thấy và xác định được đường cáp ở mọi vị trí; tại các vị trí chuyển hướng.",
        "d": "Trên cột mốc, ở vị trí tim rãnh cáp, dễ nhìn thấy và xác định được đường cáp ở mọi vị trí; tại các vị trí chuyển hướng.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn biển “CẤM VÀO! ĐIỆN ÁP CAO NGUY HIỂM CHẾT NGƯỜI” đặt ở đâu?",
        "a": "Trên cửa hoặc cổng ra vào trạm rạm điện có tường rào bao quanh,",
        "b": "Trên thang trèo của TBA treo trên cột,",
        "c": "Trên cửa hoặc cổng ra vào trạm rạm điện có người trực,",
        "d": "Trên cửa hoặc cổng ra vào trạm rạm điện không người trực,",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn biển “CẤM LẠI GẦN! CÓ ĐIỆN NGUY HIỂM CHẾT NGƯỜI” được đặt như thế nào?",
        "a": "Trên vỏ trạm biến áp hợp bộ kiểu kín, trạm đóng cắt hợp bộ ngoài trời, tủ phân dây (Tủ Pillar) về phía dễ nhìn thấy.",
        "b": "Trên vỏ trạm biến áp hợp bộ kiểu kín, trạm đóng cắt hợp bộ ngoài trời, trạm GIS về phía dễ nhìn thấy.",
        "c": "Trên vỏ trạm biến áp treo, trạm đóng cắt hợp bộ ngoài trời, tủ phân dây (Tủ Pillar) về phía dễ nhìn thấy.",
        "d": "Trên vỏ trạm biến áp hợp bộ kiểu kín, trạm cắt, trạm đô đếm ngoài trời, tủ phân dây (Tủ Pillar) về phía dễ nhìn thấy.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, biển “CẤM ĐÓNG ĐIỆN! CÓ NGƯỜI ĐANG LÀM VIỆC” được đặt như thế nào?.",
        "a": "Trên bộ phận điều khiển, truyền động thiết bị đóng cắt đã cắt điện cho đơn vị công tác làm việc.",
        "b": "Trên bộ phận điều khiển, truyền động thiết bị đóng cắt đã cắt điện theo PTT của các cấp điều độ.",
        "c": "Trên bộ phận điều khiển, cánh tủ phân phối đã cắt điện cho đơn vị công tác làm việc.",
        "d": "Trên bộ phận điều khiển, truyền động thiết bị đóng cắt đã cắt điện khi chuyển đổi kết dây cơ bản.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, biển “DỪNG LẠI! CÓ ĐIỆN NGUY HIỂM CHẾT NGƯỜI” được đặt như thế nào?",
        "a": "Đặt trên rào chắn về phía dễ nhìn thấy.",
        "b": "Trên cửa hoặc cổng ra vào trạm rạm điện có người trực,",
        "c": "Trên vỏ trạm biến áp hợp bộ kiểu kín, trạm đóng cắt hợp bộ ngoài trời, trạm GIS về phía dễ nhìn thấy.",
        "d": "Trên vỏ trạm biến áp hợp bộ kiểu kín, trạm cắt, trạm đô đếm ngoài trời, tủ phân dây (Tủ Pillar) về phía dễ nhìn thấy.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, biển “LÀM VIỆC TẠI ĐÂY” được đặt như thế nào?.",
        "a": "Đặt tại nơi làm việc đã được khoanh vùng; tại khu vực làm việc của ĐVCT.",
        "b": "Đặt tại đầu lối vào khu vực làm việc của ĐVCT.",
        "c": "Đặt tại khu vực đã đóng DNĐ hoặc đã đặt nối đất lưu động.",
        "d": "Đặt tại nơi làm việc đã cho phép; tại khu vực làm việc đã đặt nối đất.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, biển “VÀO HƯỚNG NÀY” được đặt như thế nào?",
        "a": "Đặt tại đầu lối vào khu vực làm việc của ĐVCT.",
        "b": "Đặt tại khu vực đã đóng DNĐ hoặc đã đặt nối đất lưu động.",
        "c": "Đặt tại nơi làm việc đã cho phép; tại khu vực làm việc đã đặt nối đất.",
        "d": "Đặt tại đầu lối vào khu vực thao tác của ĐVQLVH.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, biển “ĐÃ NỐI ĐẤT” được đặt như thế nào?",
        "a": "Đặt tại khu vực đã đóng DNĐ hoặc đã đặt nối đất lưu động.",
        "b": "Đặt tại khu vực đã cắt điện và đặt nối đất lưu động.",
        "c": "Đặt tại khu vực đã đặt nối đất lưu động trong TBA.",
        "d": "Đặt tại khu vực đã đóng DNĐ trên .đường dât",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, biển “CHÚ Ý! PHÍA TRÊN CÓ ĐIỆN” treo ở vị trí nào?",
        "a": "Treo ở vị trí dễ quan sát tại khu vực làm việc mà ở phía trên có điện.",
        "b": "Treo ở vị trí dễ quan sát trên cột điện mà ở phía trên có điện.",
        "c": "Treo ở vị trí dễ quan sát trên các trụ thiết bị trong TBA mà ở phía trên có điện.",
        "d": "Treo ở tất cả các vị trí mà ở phía trên có điện.",
        "correct": "a"
    },
    {
        "q": "Theo Quy trình An toàn, quy định điện cao áp và hạ áp như thế nào?",
        "a": "Điện hạ áp là điện áp danh định tới 1000V, điện cao áp là điện áp danh định trên 1000V.",
        "b": "Điện hạ áp là điện áp dưới 1000V, điện cao áp là điện áp trên 1000V trở lên.",
        "c": "Điện hạ áp là điện áp đến 1000V, điện cao áp là điện áp từ 1000V trở lên.",
        "d": "Điện hạ áp là điện áp trên 1000V, điện cao áp là điện áp trên 1000V trở lên.",
        "correct": "a"
    },
    {
        "q": "Theo Quy định công tác quản lý an toàn ban hành kèm theo Quyết định số 1729/QĐ-EVNNPC, rủi ro cấp 5 là?",
        "a": "Là rủi ro có mức độ nghiêm trọng.",
        "b": "Là rủi ro có mức độ cực kỳ nghiêm trọng, thảm họa.",
        "c": "Là rủi ro có mức độ rủi ro trung bình.",
        "d": "Là rủi ro có mức độ rủi ro cao.",
        "correct": "a"
    }
];