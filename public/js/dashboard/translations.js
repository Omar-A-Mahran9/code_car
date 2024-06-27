const __ = (word) => {
  let locale = document.querySelector("html").getAttribute("lang") || "ar";
  if (locale === "ar") return translations[locale][word] ?? word;
  else return word;
};

let translations = {
  ar: {
    "Adding car to FAV": "جاري اضافة السيارة إلى المفضلة",
    "Removing car from FAV": "جاري إزالة السيارة من المفضلة",
    "Please wait ...": "يرجى الانتظار ...",
    "Are you sure from deleting this ": "هل انت متاكد من حذف  ",
    "Yes, Delete !": "نعــم, أحذف !",
    "No, Cancel": "لا , ألغي",
    "Request is submitted successfully": "تم تسجيل الطلب بنجاح",

    "something went wrong": "حدث خطأ ما",
    "Error !": "خطـأ !",

    "Operation done successfully": "تمت العملية بنجاح",
    "This action is unauthorized.": "ليس لديك صلاحية لهذا الاجراء",
    "Sorry, this car not found now please choose another one":
      "هذه السيارة غير متوفرة حاليا ! حاول مرة ثانية",
    "Sorry, Not found offers for you now": "عذراَ لا يوجد لديك عروض حالياَ",
    "This order have finance approval before":
      "رقم الطلب الذي أدخلته تم تعميده من قبل",
    "Loading...": "تحميل...",
    "Please try again": "حاول مرة ثانية",
    years: "سنوات",
    Years: "سنوات",

    Actions: "الإجراءات",
    Edit: "تعديل",
    Delete: "حذف",
    "car details": "بيانات السيارة",
    "Offer details": "بيانات العرض",

    "monthly installment": "القسط الشهري",
    "Monthly installment": "القسط الشهري",
    "S.R": "ريال",

    "first installment": "الدفعة الأولى",
    "The first installment": "الدفعة الأولى",
    "The last installment": "الدفعة الأخيرة",

    "last installment": "الدفعة الأخيرة",
    "administrative fees": "الرسوم الادارية",
    "Administrative fees": "الرسوم الادارية",
    "open location": "العنوان",
    "show more": "عرض المزيد",
    "Are you sure you want to delete this": "هل أنت متأكد من حذف هذا ",
    Delegate: "المندوب",
    "?": "؟",
    "deleting now ...": "يتم الحذف الأن ...",
    "Data in processing now...": "جاري جلب البيانات...",
    "You have deleted the": "تم حذف",
    "was not deleted !": "لم يتم الحذف !",
    "successfully !": "بنجاح !",
    Show: "التفاصيل",
    price: "السعر",
    Clear: "إلغاء",
    Apply: "تطبيق",
    unavailable: "غير متاح",
    competitive_price: "سعر منافس",
    available_on_request: "متوفر عند الطلب",
    Next: "الـتالي",
    Submit: "حـفـظ",
    submit: "حـفـظ",

    "Outer images": "الصور الخارجية",
    "Inner images": "الصور الداخلية",
    "File selected": "ملف تم تحديدة",
    "preview photos": "معاينة الصور",
    "Delete image": "حذف الصورة",
    available: "متاح",
    Yes: "نعم",
    No: "لا",
    features: "الميزة",
    packages: "الحزمة",
    "Processing...": "جاري التحميل ...",
    "Custom Range": "فترة محددة",
    "No data available in table": "لا يوجد بيانات",
    "unavailable car": "سيارة غير موجودة",
    January: "يناير",
    February: "فبراير",
    March: "مارس",
    April: "أبريل",
    May: "مايو",
    June: "يونيو",
    July: "يوليو",
    August: "أغسطس",
    September: "سبتمبر",
    October: "أكتوبر",
    November: "نوفمبر",
    December: "ديسمبر",
    "Cars number": "عدد السيارات",
    "Orders number": "عدد الطلبات",
    "Vendors number": "عدد العملاء",
    Duplicate: "تكرار",
    bank: "البنك",
    branch: "الفرع",
    "bank offer": "عرض البنك",
    "There are no images": "لا يوجد صور",
    brand: "العلامة التجارية",
    career: "الوظيفة",
    car: "سيارة",
    city: "المدينة",
    vendor: "العميل",
    color: "اللون",
    employee: "الموظف",
    faq: "السؤال",
    model: "الموديل",
    news: "الخبر",
    offer: "العرض",
    order: "الطلب",
    role: "الدور",
    service: "الخدمة",
    tag: "الوسم",
    change: "تغيير",
    cancel: "إلغاء",
    Price: "السعر",
    "write a comment": "أكتب تعليقا",
    applicants: "المتقدمين",
    Leather: "جلد",
    Velvet: "مخمل",
    "Front wheel": "دفع امامي",
    "Rear wheel": "دفع خلفي",
    SAR: "ريال",
    New: "جديد",
    Used: "مستعمل",
    Showing: "عرض",
    to: "من",
    records: "صفوف",
    of: "إجمالي",
    "Showing no records": "عدد الصفوف المعروضة",
    "Name in arabic": "الأسم بالعربية",
    subscriber: "المشترك",
    "Pick new date": "اختر التاريخ الجديد",
    "change order status": "تغيير حالة الطلب",
    "No results found": "لا يوجد نتائج للعرض",
    "test drive": "التجربة",
    Auto: "اوتوماتيك",
    hatchback: "هاتشباك",
    sedan: "سيدان",
    "4x4": "دفع رباعي",
    "continuous 4x4": "دفع رباعي مستمر",
    family: "عائلي",
    commercial: "تجاري",
    hybrid: "هجين",
    gas: "بنزين",
    diesel: "ديزل",
    "competitive price": "سعر منافس",
    "available on request": "متوفر عند الطلب",
    "4 by 4": "دفع رباعي",
    "All data related to this": "جميع البيانات المرتبطة بهذه",
    "will be deleted": "سوف يتم حذفها",
    Restore: "استرجاع",
    "You have restored the": "تم استرجاع",
    agency: "وكالة",
    exhibition: "معرض",
    individual: "فرد",
    category: "الفئة",
    "Order number not found":
      "رقم الطلب الذي أدخلته غير موجود في الطلبات التي لم يتم تعميدها من فضلك أدخل رقم طلب آخر",
    "Order number": "رقم الطلب",
    "Car Price With plate Number": "سعر السيارة مضاف اليه اللوحات",
    "File Downloaded": "تم تحميل الملف",
    "Finance approvals": "التعميد",
    "Finance approvals Orders": "تعميد طلب",
    "Finance Approvals": "التعميد",
    "finance approvals": "التعميد",
    finance: "تمويل",
    cash: "كاش",
    organization: "شركة",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
  },
};
